package com.example.rolex_be.controller;

import com.example.rolex_be.dto.request.SignUpForm;
import com.example.rolex_be.dto.response.JwtResponse;
import com.example.rolex_be.dto.response.ResponseMessage;
import com.example.rolex_be.model.Account;
import com.example.rolex_be.model.User;
import com.example.rolex_be.security.jwt.JwtProvider;
import com.example.rolex_be.security.userprincal.UserPrinciple;
import com.example.rolex_be.service.IAccountService;
import com.example.rolex_be.service.IRoleService;
import com.example.rolex_be.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/account")
@CrossOrigin("*")
public class JwtAuthenticationController {
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtProvider jwtProvider;
    @Autowired
    private IAccountService accountService;
    @Autowired
    private IUserService userService;
    @Autowired
    private IRoleService roleService;

    @PostMapping("/signin")
    public ResponseEntity<?> login(@Valid @RequestBody Account account) {
        Optional<Account> acc = accountService.findByUsername(account.getUsername());
        boolean match = passwordEncoder.matches(account.getPasswords(), acc.get().getPasswords());
        if (match) {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(account.getUsername(), account.getPasswords())
            );
            // set quyền cho người dùng vừa gửi tới
            SecurityContextHolder.getContext().setAuthentication(authentication);
            // tạo token trả về client
            String token = jwtProvider.createToken(authentication);
            // lấy ra đối tượng đang tương tác
            UserPrinciple userPrinciple = (UserPrinciple) authentication.getPrincipal();
            return new ResponseEntity<>(new JwtResponse(token, userPrinciple.getUsername(), userPrinciple.getAuthorities().toArray()[0].toString()), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

    }


    @PostMapping("/signup")
    public ResponseEntity<?> register(@Valid @RequestBody SignUpForm signUpForm) {
        if (accountService.checkUserExistsByEmail(signUpForm.getEmail())) {
            return new ResponseEntity<>(new ResponseMessage("Email đã tồn tại"), HttpStatus.BAD_REQUEST);
        }
        if (signUpForm.getRole() == null) {
            signUpForm.setRole(roleService.findAllByNameRoles("USER").get());
        }
        User user = new User(signUpForm.getNameUser(), signUpForm.getDayOfBirth(), signUpForm.isGender(), signUpForm.getEmail(), signUpForm.getAddress(), signUpForm.getPhone());
        userService.addUser(user);
        Account account = new Account(signUpForm.getEmail(), passwordEncoder.encode(signUpForm.getPasswords()), signUpForm.getRole());
        accountService.createAccount(account);
        return new ResponseEntity<>(new ResponseMessage("Đăng ký thành công"), HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }


}
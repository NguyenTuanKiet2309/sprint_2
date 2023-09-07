package com.example.rolex_be.controller;

import com.example.rolex_be.dto.response.JwtResponse;
import com.example.rolex_be.model.Account;
import com.example.rolex_be.security.jwt.JwtProvider;
import com.example.rolex_be.security.userprincal.UserPrinciple;
import com.example.rolex_be.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Account account) {
        Account acc = accountService.findByUsername(account.getUsername());
        boolean match = passwordEncoder.matches(account.getPasswords(), acc.getPasswords());
        if (match) {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(account.getUsername(), account.getPasswords())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String token = jwtProvider.createToken(authentication);
            UserPrinciple userPrinciple = (UserPrinciple) authentication.getPrincipal();
            return ResponseEntity.ok(new JwtResponse(token, userPrinciple.getUsername(), userPrinciple.getAuthorities().toArray()[0].toString()));
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

    }

//    @PreAuthorize("hasRole('ROLE_CUSTOMER')")
//    @GetMapping("/aa")
//    public ResponseEntity<?> aa (){
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
}
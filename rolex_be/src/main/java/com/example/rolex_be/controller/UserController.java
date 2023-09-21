package com.example.rolex_be.controller;


import com.example.rolex_be.model.User;
import com.example.rolex_be.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private IUserService iUserService;
    @GetMapping("")
    public ResponseEntity<User> getUserByEmail(@RequestParam("email") String email) {
        User user = iUserService.getUser(email);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
package com.example.rolex_be.service;



import com.example.rolex_be.model.User;

import java.util.Optional;

public interface IUserService {
    Optional<User> findUserByEmail(String email);
    boolean checkUserExistsByEmail(String email);

    void addUser (User user);

    User findUserByAccountId(String email);
    User getUser(String email);
}

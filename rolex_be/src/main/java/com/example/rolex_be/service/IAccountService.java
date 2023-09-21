package com.example.rolex_be.service;

import com.example.rolex_be.model.Account;

import java.util.Optional;

public interface IAccountService {
    void createAccount(Account account);
    Optional<Account> findByUsername(String username);

    boolean checkUserExistsByEmail(String email);
}
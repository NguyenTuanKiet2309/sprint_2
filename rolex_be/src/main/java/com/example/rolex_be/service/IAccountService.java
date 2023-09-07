package com.example.rolex_be.service;

import com.example.rolex_be.model.Account;

public interface IAccountService {
    void createAccount(Account account);
    Account findByUsername(String username);
}
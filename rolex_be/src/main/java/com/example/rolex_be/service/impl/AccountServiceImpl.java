package com.example.rolex_be.service.impl;

import com.example.rolex_be.model.Account;
import com.example.rolex_be.repository.IAccountRepository;
import com.example.rolex_be.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountServiceImpl implements IAccountService {
    @Autowired
    private IAccountRepository accountRepository;

    @Override
    public void createAccount(Account account) {
        accountRepository.save(account);
    }

    @Override
    public Optional<Account> findByUsername(String username) {
        return accountRepository.findByUsername(username);
    }

    @Override
    public boolean checkUserExistsByEmail(String email) {
        return accountRepository.existsByUsername(email);
    }
}

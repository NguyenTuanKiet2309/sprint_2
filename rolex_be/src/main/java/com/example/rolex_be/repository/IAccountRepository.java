package com.example.rolex_be.repository;

import com.example.rolex_be.model.Account;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IAccountRepository extends JpaRepository<Account, Long> {
    Optional<Account> findByUsername(String username);
    Account findByUsernameContainsIgnoreCase(String username);
}
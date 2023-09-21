package com.example.rolex_be.repository;

import com.example.rolex_be.model.Account;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAccountRepository extends JpaRepository<Account, Integer> {
    Optional<Account> findByUsername(String username);
    Account findByUsernameContainsIgnoreCase(String username);
    boolean existsByUsername(String email);
}
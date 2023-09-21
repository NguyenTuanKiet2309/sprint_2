package com.example.rolex_be.repository;

import com.example.rolex_be.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IUserRepository extends JpaRepository<User,Integer> {

    Optional<User> findByNameUser(String email);

    boolean existsByNameUser(String email);

    User findUserByAccountId_Username(String email);
    User findByAccountId_Username(String email);
}

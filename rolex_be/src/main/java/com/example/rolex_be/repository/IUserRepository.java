package com.example.rolex_be.repository;

import com.example.rolex_be.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User,Integer> {
}

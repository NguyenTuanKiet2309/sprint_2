package com.example.rolex_be.service.impl;

import com.example.rolex_be.model.User;
import com.example.rolex_be.repository.IUserRepository;
import com.example.rolex_be.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private IUserRepository userRepository;
    @Override
    public Optional<User> findUserByEmail(String email) {
        return userRepository.findByNameUser(email);
    }

    @Override
    public boolean checkUserExistsByEmail(String email) {
        return userRepository.existsByNameUser(email);
    }

    @Override
    public void addUser(User user) {
        userRepository.save(user);
    }

    @Override
    public User findUserByAccountId(String email) {
        return userRepository.findUserByAccountId_Username(email);
    }

    @Override
    public User getUser(String email) {
        return userRepository.findByAccountId_Username(email);
    }
}

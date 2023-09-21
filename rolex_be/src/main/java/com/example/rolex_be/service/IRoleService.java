package com.example.rolex_be.service;

import com.example.rolex_be.model.Role;

import java.util.Optional;


public interface IRoleService {
    Optional<Role> findAllByNameRoles(String nameRole);

}

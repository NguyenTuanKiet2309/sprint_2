package com.example.rolex_be.service.impl;

import com.example.rolex_be.model.Role;
import com.example.rolex_be.repository.IRoleRepository;
import com.example.rolex_be.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class RoleServiceImpl implements IRoleService {
    @Autowired
    private IRoleRepository roleRepository;
    @Override
    public Optional<Role> findAllByNameRoles(String nameRole) {
        return roleRepository.findAllByNameRole(nameRole);
    }
}

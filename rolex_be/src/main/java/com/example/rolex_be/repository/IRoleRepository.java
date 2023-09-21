package com.example.rolex_be.repository;



import com.example.rolex_be.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.Optional;


@Repository
public interface IRoleRepository extends JpaRepository<Role, Integer> {
    Optional<com.example.rolex_be.model.Role> findAllByNameRole(String nameRole);
}
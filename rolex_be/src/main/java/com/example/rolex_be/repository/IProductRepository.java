package com.example.rolex_be.repository;

import com.example.rolex_be.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductRepository extends JpaRepository<Product,Integer> {
}

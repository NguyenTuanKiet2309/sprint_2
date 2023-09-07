package com.example.rolex_be.service;

import com.example.rolex_be.model.Product;

import java.util.List;

public interface IProductService {
    List<Product> findProductByCategoryId(int idCategory);
}

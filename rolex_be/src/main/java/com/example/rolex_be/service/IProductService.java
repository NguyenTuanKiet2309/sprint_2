package com.example.rolex_be.service;

import com.example.rolex_be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductService {
    Page<Product> findProductByCategoryId(Pageable pageable, String categoryName);

    Page<Product> findProductByGender(Pageable pageable, String typeName);

    Product findProductByProductId(int productId);

    Product findProductByProductIdAndCategoryId(int productId, int categoryId);

    Page<Product> findProductMore(Pageable pageable);

    Page<Product> productDESC(Pageable pageable, String categoryName);

    Page<Product> productASC(Pageable pageable, String categoryName);

    void updateQuantityProductById(int quantity, int idProduct);

    List<Product> findSameProductByCategoryId(int categoryId);

    Page<Product> findProductSearch(Pageable pageable, String categoryName, String typeName, String material);

    Page<Product> findProductSearchAdvanced(Pageable pageable, String categoryName, String typeName, String material, int min, int max);
    Integer getProductQuantity( int idProduct);

}
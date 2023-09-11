package com.example.rolex_be.service;

import com.example.rolex_be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductService {
    Page<Product> findProductByCategoryId( Pageable pageable,int idCategory);
    Page<Product> findProductByGender(Pageable pageable, int typeId);
}

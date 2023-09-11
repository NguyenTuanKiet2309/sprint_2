
package com.example.rolex_be.service.impl;

import com.example.rolex_be.model.Product;
import com.example.rolex_be.repository.IProductRepository;
import com.example.rolex_be.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Override
    public Page<Product> findProductByCategoryId( Pageable pageable,int categoryId) {
        return productRepository.findProductByCategoryId(pageable,categoryId);
    }

    @Override
    public Page<Product> findProductByGender(Pageable pageable, int typeId) {
        return productRepository.findProductByGender(pageable,typeId);
    }
}

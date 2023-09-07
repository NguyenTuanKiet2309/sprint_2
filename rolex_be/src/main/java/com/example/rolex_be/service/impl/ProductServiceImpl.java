
package com.example.rolex_be.service.impl;

import com.example.rolex_be.model.Product;
import com.example.rolex_be.repository.IProductRepository;
import com.example.rolex_be.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Override
    public List<Product> findProductByCategoryId(int categoryId) {
        return productRepository.findProductByCategoryId(categoryId);
    }
}


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
    public Page<Product> findProductByCategoryId( Pageable pageable,String categoryName) {
        return productRepository.findProductByCategoryId(pageable,categoryName);
    }

    @Override
    public Page<Product> findProductByGender(Pageable pageable, String typeName) {
        return productRepository.findProductByGender(pageable,typeName);
    }

    @Override
    public Product findProductByProductId(int productId) {
        return productRepository.findProductByProductId(productId);
    }

    @Override
    public Product findProductByProductIdAndCategoryId(int productId, int categoryId) {
        return productRepository.findProductByProductIdAndCategoryId(productId  ,categoryId);
    }



    @Override
    public Page<Product> findProductMore(Pageable pageable) {
        return productRepository.findProductMore(pageable);
    }

    @Override
    public Page<Product> productDESC(Pageable pageable, String categoryName) {
        return productRepository.productDESC(pageable, categoryName);
    }

    @Override
    public Page<Product> productASC(Pageable pageable, String categoryName) {
        return productRepository.productASC(pageable,categoryName);
    }

    @Override
    public void updateQuantityProductById(int quantity, int idProduct) {
        productRepository.updateQuantityProductById(quantity,idProduct);
    }

    @Override
    public List<Product> findSameProductByCategoryId(int categoryId) {
        return productRepository.findSameProductByCategoryId(categoryId);
    }

    @Override
    public Page<Product> findProductSearch(Pageable pageable, String categoryName, String typeName, String material) {
        return productRepository.findProductSearch(pageable,categoryName,typeName,material);
    }

    @Override
    public Page<Product> findProductSearchAdvanced(Pageable pageable, String categoryName, String typeName, String material,int min,int max) {
        return   productRepository.findProductSearchAdvanced(pageable,categoryName,typeName,material,min,max);
    }

    @Override
    public Integer getProductQuantity(int idProduct) {
        return productRepository.getProductQuantity(idProduct);
    }


}

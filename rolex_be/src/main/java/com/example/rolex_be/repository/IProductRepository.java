package com.example.rolex_be.repository;

import com.example.rolex_be.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product,Integer> {
    @Query(nativeQuery = true,value = "select * from product p join category c on c.category_id = p.category_id where p.category_id = :categoryId")
    List<Product> findProductByCategoryId(@Param("categoryId")int categoryId);
}

package com.example.rolex_be.repository;

import com.example.rolex_be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product,Integer> {
    @Query(nativeQuery = true,value = "select * from product p join category c on c.category_id = p.category_id where p.category_id = :categoryId")
    Page<Product> findProductByCategoryId( Pageable pageable,@Param("categoryId")int categoryId);

    @Query(nativeQuery = true,value = "select * from product p join type_product tp on tp.type_id = p.type_id where p.type_id = :typeId")
    Page<Product> findProductByGender(Pageable pageable,@Param("typeId") int typeId);
}

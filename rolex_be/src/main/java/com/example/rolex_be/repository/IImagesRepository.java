package com.example.rolex_be.repository;

import com.example.rolex_be.model.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IImagesRepository extends JpaRepository<Images,Integer> {
    @Query(nativeQuery = true,value = "select m.image_id,p.product_id,m.image_url from product p join images m on m.product_id = p.product_id where p.product_id = :productId")
    List<Images> findImagesByProductId(@Param("productId") int productId);
}

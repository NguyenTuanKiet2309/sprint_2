package com.example.rolex_be.repository;

import com.example.rolex_be.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;


@Transactional
public interface ICategoryRepository extends JpaRepository<Category,Integer> {
    @Modifying
    @Query(nativeQuery = true,value = "select * from category")
    List<Category> findAllCategory();

    @Query(nativeQuery = true,value = "select * from category where category_name = :categoryName")
    Category findCategoryById(@Param("categoryName") String categoryName);
}

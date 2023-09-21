package com.example.rolex_be.service;

import com.example.rolex_be.model.Category;

import java.util.List;

public interface ICategoryService {
    List<Category> findAllCategory();
    Category findCategoryById(String categoryName);
}

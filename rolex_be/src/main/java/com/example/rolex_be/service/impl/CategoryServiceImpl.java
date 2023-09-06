package com.example.rolex_be.service.impl;

import com.example.rolex_be.model.Category;
import com.example.rolex_be.repository.ICategoryRepository;
import com.example.rolex_be.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements ICategoryService {
    @Autowired
    private ICategoryRepository categoryRepository;

    @Override
    public List<Category> findAllCategory() {
        return categoryRepository.findAllCategory();
    }
}

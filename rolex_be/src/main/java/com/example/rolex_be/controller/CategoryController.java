package com.example.rolex_be.controller;

import com.example.rolex_be.model.Category;
import com.example.rolex_be.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private ICategoryService categoryService;
    @GetMapping("")
    public ResponseEntity<List<Category>> findAllCategory(){
        List<Category> categoryList = this.categoryService.findAllCategory();
        if (!categoryList.isEmpty()) {
            return new ResponseEntity<>(categoryList, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{categoryName}")
    public ResponseEntity<Category> findCategoryById(@PathVariable String categoryName){
        Category category = this.categoryService.findCategoryById(categoryName);
            return new ResponseEntity<>(category, HttpStatus.OK);
    }
}

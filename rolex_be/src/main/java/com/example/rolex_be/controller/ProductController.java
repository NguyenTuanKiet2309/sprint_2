package com.example.rolex_be.controller;

import com.example.rolex_be.model.Product;
import com.example.rolex_be.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping(value = {"/", "/list"})
    public ResponseEntity<Page<Product>> getProductsByCategoryId(@PageableDefault(size = 20) Pageable pageable, @RequestParam("page") String page, @RequestParam("categoryId") int categoryId) {
        Page<Product> products = this.productService.findProductByCategoryId(pageable,categoryId);
        int currentPage;
        try {
            currentPage = Integer.parseInt(page);
            if (currentPage < 0) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (NumberFormatException n) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        if (!products.isEmpty()) {
            return new ResponseEntity<>(products, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
    @GetMapping("/typeProduct")
    public ResponseEntity<Page<Product>> getProductByGender(@PageableDefault(size = 20) Pageable pageable, @RequestParam("page") String page, @RequestParam("typeId") int typeId) {
        Page<Product> products = this.productService.findProductByGender(pageable,typeId);
        int currentPage;
        try {
            currentPage = Integer.parseInt(page);
            if (currentPage < 0) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (NumberFormatException n) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        if (!products.isEmpty()) {
            return new ResponseEntity<>(products, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
}

package com.example.rolex_be.controller;

import com.example.rolex_be.model.Product;
import com.example.rolex_be.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping()
    public ResponseEntity<List<Product>> getProductsByCategoryId(@RequestParam("categoryId") int categoryId) {
        List<Product> products = this.productService.findProductByCategoryId(categoryId);
        if (!products.isEmpty()) {
            return new ResponseEntity<>(products, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

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
    public ResponseEntity<Page<Product>> getProductsByCategoryId(@PageableDefault(size = 6) Pageable pageable,
                                                                 @RequestParam("page") String page,
                                                                 @RequestParam("categoryName") String categoryName,
                                                                 @RequestParam("typeName") String typeName,
                                                                 @RequestParam("material") String material,
                                                                 @RequestParam("sizePage") int sizePage) {

        Page<Product> products = null;
        switch (sizePage){
            case 1:
                products = this.productService.findProductSearchAdvanced(pageable,categoryName,typeName,material,28,32);
                break;
            case 2:
                products = this.productService.findProductSearchAdvanced(pageable, categoryName, typeName, material,33,38);
                break;
            case 3:
                products = this.productService.findProductSearchAdvanced(pageable, categoryName, typeName, material,39,44);
                break;
            default:
                products = this.productService.findProductSearch(pageable, categoryName, typeName, material);
                break;
        }
        int currentPage;
        try {
            currentPage = Integer.parseInt(page);
            if (currentPage < 0) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (NumberFormatException n) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

//        if (!products.isEmpty()) {
//
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/same/{categoryId}")
    public ResponseEntity<List<Product>> getSameProductsByCategoryId(@PathVariable int categoryId) {
        List<Product> products = this.productService.findSameProductByCategoryId(categoryId);
        if (!products.isEmpty()) {
            return new ResponseEntity<>(products, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/typeProduct")
    public ResponseEntity<Page<Product>> getProductByGender(@PageableDefault(size = 6) Pageable pageable, @RequestParam("page") String page, @RequestParam("typeName") String typeName) {
        Page<Product> products = this.productService.findProductByGender(pageable, typeName);
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

    @GetMapping("/{productId}/{categoryId}")
    public ResponseEntity<Product> getProductById(@PathVariable("productId") int productId, @PathVariable("categoryId") int categoryId) {
        Product product = productService.findProductByProductIdAndCategoryId(productId, categoryId);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/sort")
    public ResponseEntity<Page<Product>> getProductsSort(@PageableDefault(size = 6) Pageable pageable, @RequestParam("page") String page, @RequestParam("code") String code, @RequestParam("categoryName") String categoryName) {
        Page<Product> products = null;
        switch (code) {
            case "1":
                products = productService.productDESC(pageable, categoryName);
                break;
            case "2":
                products = productService.productASC(pageable, categoryName);
        }
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
    @GetMapping("/{idProduct}/quantity")
    public ResponseEntity<Integer> getProductQuantity(@PathVariable int idProduct) {
        Integer quantity = productService.getProductQuantity(idProduct);
        return ResponseEntity.ok(quantity);
    }

}

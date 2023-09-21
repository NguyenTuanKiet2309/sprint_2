package com.example.rolex_be.controller;

import com.example.rolex_be.model.Images;
import com.example.rolex_be.service.IImagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/images")
public class ImagesController {
    @Autowired
    private IImagesService iImagesService;

    @GetMapping("/{productId}")
    public ResponseEntity<List<Images>> getImagesByProductId(@PathVariable("productId") int productId){
        List<Images> imagesList = this.iImagesService.findImagesByProductId(productId);
        return new ResponseEntity<>(imagesList, HttpStatus.OK);
    }

}

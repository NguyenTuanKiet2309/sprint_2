package com.example.rolex_be.service;

import com.example.rolex_be.model.Images;

import java.util.List;

public interface IImagesService {
    List<Images> findImagesByProductId(int productId);
}

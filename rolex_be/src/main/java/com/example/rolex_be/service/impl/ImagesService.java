package com.example.rolex_be.service.impl;

import com.example.rolex_be.model.Images;
import com.example.rolex_be.repository.IImagesRepository;
import com.example.rolex_be.service.IImagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ImagesService implements IImagesService {
    @Autowired
    private IImagesRepository iImagesRepository;
    @Override
    public List<Images> findImagesByProductId(int productId) {
        return iImagesRepository.findImagesByProductId(productId);
    }
}

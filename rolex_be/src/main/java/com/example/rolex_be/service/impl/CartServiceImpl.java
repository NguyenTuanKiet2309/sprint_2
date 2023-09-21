package com.example.rolex_be.service.impl;

import com.example.rolex_be.model.ShoppingCart;
import com.example.rolex_be.repository.ICartRepository;
import com.example.rolex_be.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class CartServiceImpl implements ICartService {
    @Autowired
    private ICartRepository cartRepository;

    @Override
    public void addCart(ShoppingCart cart) {
        cartRepository.save(cart);
    }

    @Override
    public ShoppingCart getQuantityProductByUser(int idUser, int idProduct) {
        return cartRepository.getQuantityProductByUser(idUser, idProduct);
    }

    @Override
    public void deleteProduct(int idUser, int idProduct) {
        cartRepository.deleteProduct(idUser, idProduct);
    }

    @Override
    public List<ShoppingCart> getListCartByUser(int idUser) {
        return cartRepository.findAllByUserId(idUser);
    }

    @Override
    public Integer countTotalProductByUser(int idUser) {
        return cartRepository.countTotalProductByUser(idUser);
    }

    @Override
    public void deleteCartByUser(int idUser) {
        cartRepository.deleteCartByUser(idUser);
    }

    @Override
    public Integer getQuantityByProductId(int idProduct,int idUser) {
        return cartRepository.getQuantityProductByProductId(idProduct,idUser);
    }
}

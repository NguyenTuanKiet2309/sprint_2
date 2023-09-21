package com.example.rolex_be.service;

import com.example.rolex_be.model.ShoppingCart;

import java.util.List;

public interface ICartService {
    void addCart(ShoppingCart cart);

    ShoppingCart getQuantityProductByUser(int idUser, int idProduct);

    void deleteProduct(int idUser, int idProduct);

    List<ShoppingCart> getListCartByUser(int idUser);

    Integer countTotalProductByUser(int idUser);
    void deleteCartByUser (int idUser);

    Integer getQuantityByProductId(int idProduct,int idUser);
}

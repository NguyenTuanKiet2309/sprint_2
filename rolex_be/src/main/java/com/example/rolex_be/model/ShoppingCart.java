package com.example.rolex_be.model;

import javax.persistence.*;

@Entity
public class ShoppingCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idShoppingCart;
    @OneToOne
    private User user;
//    @OneToMany
//    private Product product;

    public ShoppingCart() {
    }

    public ShoppingCart(int idShoppingCart, User user, Product product) {
        this.idShoppingCart = idShoppingCart;
        this.user = user;
        this.product = product;
    }

    public int getIdShoppingCart() {
        return idShoppingCart;
    }

    public void setIdShoppingCart(int idShoppingCart) {
        this.idShoppingCart = idShoppingCart;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}

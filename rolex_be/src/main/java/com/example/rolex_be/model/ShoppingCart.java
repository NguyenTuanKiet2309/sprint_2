package com.example.rolex_be.model;

import javax.persistence.*;

@Entity
public class ShoppingCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idShoppingCart;
    private int quantity;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    public ShoppingCart(int idShoppingCart, int quantity, User user, Product product) {
        this.idShoppingCart = idShoppingCart;
        this.quantity = quantity;
        this.user = user;
        this.product = product;
    }

    public ShoppingCart(int quantity, User user, Product product) {
        this.idShoppingCart = idShoppingCart;
        this.quantity = quantity;
        this.user = user;
        this.product = product;
    }

    public ShoppingCart() {
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
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


}

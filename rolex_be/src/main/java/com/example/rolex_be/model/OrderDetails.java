package com.example.rolex_be.model;

import javax.persistence.*;

@Entity
public class OrderDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderDetailsId;
    private int quantityOrderDetail;
    @OneToMany
    private Product productId;
    @OneToOne
    private Order orderId;

    public OrderDetails() {
    }

    public OrderDetails(int orderDetailsId, int quantityOrderDetail, Product productId, Order orderId) {
        this.orderDetailsId = orderDetailsId;
        this.quantityOrderDetail = quantityOrderDetail;
        this.productId = productId;
        this.orderId = orderId;
    }

    public int getOrderDetailsId() {
        return orderDetailsId;
    }

    public void setOrderDetailsId(int orderDetailsId) {
        this.orderDetailsId = orderDetailsId;
    }

    public int getQuantityOrderDetail() {
        return quantityOrderDetail;
    }

    public void setQuantityOrderDetail(int quantityOrderDetail) {
        this.quantityOrderDetail = quantityOrderDetail;
    }

    public Product getProductId() {
        return productId;
    }

    public void setProductId(Product productId) {
        this.productId = productId;
    }

    public Order getOrderId() {
        return orderId;
    }

    public void setOrderId(Order orderId) {
        this.orderId = orderId;
    }
}

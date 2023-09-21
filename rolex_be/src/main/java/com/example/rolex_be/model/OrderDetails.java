package com.example.rolex_be.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class OrderDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderDetailsId;
    private int quantityOrderDetail;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product productId;
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order orderId;

    public OrderDetails() {
    }

    public Product getProductId() {
        return productId;
    }

    public void setProductId(Product productId) {
        this.productId = productId;
    }

    public OrderDetails(int orderDetailsId, int quantityOrderDetail, Product productId, Order orderId) {
        this.orderDetailsId = orderDetailsId;
        this.quantityOrderDetail = quantityOrderDetail;
        this.productId = productId;
        this.orderId = orderId;
    }

    public OrderDetails(int quantityOrderDetail, Product productId, Order orderId) {
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



    public Order getOrderId() {
        return orderId;
    }

    public void setOrderId(Order orderId) {
        this.orderId = orderId;
    }
}

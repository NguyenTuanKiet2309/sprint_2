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

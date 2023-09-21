package com.example.rolex_be.model;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderId;

    @Column(columnDefinition = "DATETIME")
    private String dateOrder;
    private String name_recipient;
    private String phone_recipient;
    private String address_recipient;
    private boolean orderStatus;

    private String note;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId;

    public Order() {
    }

    public Order(int orderId, String dateOrder, String name_recipient, String phone_recipient, String address_recipient, boolean orderStatus, String note, User userId) {
        this.orderId = orderId;
        this.dateOrder = dateOrder;
        this.name_recipient = name_recipient;
        this.phone_recipient = phone_recipient;
        this.address_recipient = address_recipient;
        this.orderStatus = orderStatus;
        this.note = note;
        this.userId = userId;
    }

    public Order(String dateOrder, String name_recipient, String phone_recipient, String address_recipient, boolean orderStatus, String note, User userId) {
        this.dateOrder = dateOrder;
        this.name_recipient = name_recipient;
        this.phone_recipient = phone_recipient;
        this.address_recipient = address_recipient;
        this.orderStatus = orderStatus;
        this.note = note;
        this.userId = userId;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }


    public String getDateOrder() {
        return dateOrder;
    }

    public void setDateOrder(String dateOrder) {
        this.dateOrder = dateOrder;
    }

    public boolean isOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(boolean orderStatus) {
        this.orderStatus = orderStatus;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public String getName_recipient() {
        return name_recipient;
    }

    public void setName_recipient(String name_recipient) {
        this.name_recipient = name_recipient;
    }

    public String getPhone_recipient() {
        return phone_recipient;
    }

    public void setPhone_recipient(String phone_recipient) {
        this.phone_recipient = phone_recipient;
    }

    public String getAddress_recipient() {
        return address_recipient;
    }

    public void setAddress_recipient(String address_recipient) {
        this.address_recipient = address_recipient;
    }
}

package com.example.rolex_be.service;

import com.example.rolex_be.model.Order;
import com.example.rolex_be.model.OrderDetails;

import java.util.List;

public interface IOrderDetailsService {
    void addOrderDetails(OrderDetails orderDetails);
    List<OrderDetails> findOrderDetailsByOrderId(int idOrder);
}

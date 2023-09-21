package com.example.rolex_be.service;

import com.example.rolex_be.model.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IOrderService {
    Order addOrder(Order order);
    Page<Order> findAllOrderHistory(Pageable pageable,int idOrder);
}

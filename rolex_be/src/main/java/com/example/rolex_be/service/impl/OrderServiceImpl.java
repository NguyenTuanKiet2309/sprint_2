package com.example.rolex_be.service.impl;

import com.example.rolex_be.model.Order;
import com.example.rolex_be.repository.IOrderRepository;
import com.example.rolex_be.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;
    @Override
    public Order addOrder(Order order) {
      return   orderRepository.save(order);
    }

    @Override
    public Page<Order> findAllOrderHistory(Pageable pageable, int idOrder) {
        return orderRepository.findAllByUserIdOrderByDateOrderDesc(pageable,idOrder);
    }
}

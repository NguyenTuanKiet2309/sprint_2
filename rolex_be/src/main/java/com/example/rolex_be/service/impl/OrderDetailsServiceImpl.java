package com.example.rolex_be.service.impl;

import com.example.rolex_be.model.OrderDetails;
import com.example.rolex_be.repository.IOrderDetailsRepository;
import com.example.rolex_be.repository.IOrderRepository;
import com.example.rolex_be.service.IOrderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailsServiceImpl implements IOrderDetailsService {
    @Autowired
    private IOrderDetailsRepository orderDetailsRepository;
    @Override
    public void addOrderDetails(OrderDetails orderDetails) {
        orderDetailsRepository.save(orderDetails);
    }

    @Override
    public List<OrderDetails> findOrderDetailsByOrderId(int idOrder) {
        return orderDetailsRepository.findAllByOrderId_OrderId(idOrder);
    }
}

package com.example.rolex_be.repository;

import com.example.rolex_be.model.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface IOrderDetailsRepository extends JpaRepository<OrderDetails,Integer> {

    List<OrderDetails> findAllByOrderId_OrderId(int idOrder);
}

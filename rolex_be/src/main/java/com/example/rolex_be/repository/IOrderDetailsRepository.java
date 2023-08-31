package com.example.rolex_be.repository;

import com.example.rolex_be.model.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderDetailsRepository extends JpaRepository<OrderDetails,Integer> {
}

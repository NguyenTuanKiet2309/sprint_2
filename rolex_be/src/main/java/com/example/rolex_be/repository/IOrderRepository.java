package com.example.rolex_be.repository;

import com.example.rolex_be.model.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IOrderRepository extends JpaRepository<Order,Integer> {
    @Query(nativeQuery = true,value = "  select * from orders o " +
            "                join `user` u on o.user_id = u.user_id " +
            "                join order_details od on o.order_id =od.order_id " +
            "                join product p on od.product_id = p.product_id " +
            "                where  u.user_id = :idOrder" +
            "                order by o.date_order desc")
    Page<Order> findAllByUserIdOrderByDateOrderDesc(Pageable pageable,@Param("idOrder") int idOrder);
}

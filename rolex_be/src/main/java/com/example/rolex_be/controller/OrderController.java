package com.example.rolex_be.controller;

import com.example.rolex_be.model.*;
import com.example.rolex_be.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin("*")
public class OrderController {
    @Autowired
    private IOrderDetailsService orderDetailService;
    @Autowired
    private IUserService userService;
    @Autowired
    private IOrderService orderService;

    @GetMapping()
    public ResponseEntity<List<OrderDetails>> getOrderDetailByIdOder(@RequestParam("id") Integer idOrder) {
        List<OrderDetails> detailList = orderDetailService.findOrderDetailsByOrderId(idOrder);
        if (detailList == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(detailList, HttpStatus.OK);
        }
    }
    @GetMapping("/history")
    public ResponseEntity<Page<Order>> getHistoryByOrderId(@PageableDefault(size = 5) Pageable pageable, @RequestParam("username") String username, @RequestParam("page") String page) {
        User user = userService.findUserByAccountId(username);
        Page<Order> orders = orderService.findAllOrderHistory(pageable,user.getId());
        int currentPage;
        try {
            currentPage = Integer.parseInt(page);
            if (currentPage < 0) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (NumberFormatException n) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        if (orders == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(orders, HttpStatus.OK);
        }
    }
}

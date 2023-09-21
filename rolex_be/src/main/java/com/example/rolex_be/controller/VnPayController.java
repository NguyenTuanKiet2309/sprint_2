package com.example.rolex_be.controller;

import com.example.rolex_be.config.PaymentConfig;
import com.example.rolex_be.model.*;
import com.example.rolex_be.security.jwt.JwtProvider;
import com.example.rolex_be.service.*;
import io.jsonwebtoken.impl.TextCodec;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/vnpay")
public class VnPayController {
    @Autowired
    private JwtProvider provider;
    @Autowired
    private IUserService userService;
    @Autowired
    private ICartService cartService;
    @Autowired
    private IOrderService orderService;
    @Autowired
    private IProductService productService;
    @Autowired
    private IOrderDetailsService orderDetailsService;


    @PostMapping("/create/{total}")
    public ResponseEntity<?> create(@PathVariable long total)
            throws UnsupportedEncodingException {

        String orderType = "170000";
//        long amount = Integer.parseInt(req.getParameter("amount"))*100;
//        String bankCode = req.getParameter("bankCode");


        String amount = String.valueOf(total * 100);
//        String amount = "10000000";
        String vnp_TxnRef = PaymentConfig.getRandomNumber(8);
//        String vnp_IpAddr = Config.getIpAddress(req);
        String vnp_TmnCode = PaymentConfig.vnp_TmnCode;
        Map<String, String> vnp_Params = new HashMap<>();
        vnp_Params.put("vnp_Version", PaymentConfig.vnp_Version);
        vnp_Params.put("vnp_Command", PaymentConfig.vnp_Command);
        vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.put("vnp_Amount", String.valueOf(amount));
        vnp_Params.put("vnp_CurrCode", "VND");
        vnp_Params.put("vnp_BankCode", "NCB");
        vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
        vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang:" + vnp_TxnRef);
        vnp_Params.put("vnp_OrderType", orderType);
        vnp_Params.put("vnp_Locale", "vn");
//        String locate = req.getParameter("language");
//        if (locate != null && !locate.isEmpty()) {
//            vnp_Params.put("vnp_Locale", locate);
//        } else {
//            vnp_Params.put("vnp_Locale", "vn");
//        }
        vnp_Params.put("vnp_ReturnUrl", PaymentConfig.vnp_Returnurl);
        vnp_Params.put("vnp_IpAddr", "0:0:0:0:0:0:0:1");

        Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String vnp_CreateDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

        cld.add(Calendar.MINUTE, 15);
        String vnp_ExpireDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_ExpireDate", vnp_ExpireDate);

        List fieldNames = new ArrayList(vnp_Params.keySet());
        Collections.sort(fieldNames);
        StringBuilder hashData = new StringBuilder();
        StringBuilder query = new StringBuilder();
        Iterator itr = fieldNames.iterator();
        while (itr.hasNext()) {
            String fieldName = (String) itr.next();
            String fieldValue = (String) vnp_Params.get(fieldName);
            if ((fieldValue != null) && (fieldValue.length() > 0)) {
                //Build hash data
                hashData.append(fieldName);
                hashData.append('=');
//                TextCodec URLEncoder;
                hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                //Build query
                query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII.toString()));
                query.append('=');
                query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                if (itr.hasNext()) {
                    query.append('&');
                    hashData.append('&');
                }
            }
        }
        String queryUrl = query.toString();
        String vnp_SecureHash = PaymentConfig.hmacSHA512(PaymentConfig.vnp_HashSecret, hashData.toString());
        queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
        String paymentUrl = PaymentConfig.vnp_PayUrl + "?" + queryUrl;
        return new ResponseEntity<>(paymentUrl, HttpStatus.OK);
    }

    @PostMapping("/return/{address}/{note}/{phone}/{name}/{username}")
    public ResponseEntity<?> addOrder(@PathVariable String username, @PathVariable String address, @PathVariable String note, @PathVariable String phone, @PathVariable String name) {
        try {
            User user = userService.findUserByAccountId(username);
            Date date = new Date();
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd hh:mm:ss");
            String formattedDate = dateFormat.format(date);
            List<ShoppingCart> list = cartService.getListCartByUser(user.getId());
            if (note == "") {
                note = " ";
            }
            Order order = new Order(formattedDate, name, phone, address, false, note, user);
            Order order1 = orderService.addOrder(order);
            OrderDetails orderDetails = null;

            for (int i = 0; i < list.size(); i++) {
                orderDetails = new OrderDetails(list.get(i).getQuantity(), list.get(i).getProduct(), order1);
                orderDetailsService.addOrderDetails(orderDetails);
                Product product = productService.findProductByProductId(list.get(i).getProduct().getProductId());
                productService.updateQuantityProductById(product.getQuantity() - list.get(i).getQuantity(),
                        list.get(i).getProduct().getProductId());
            }

            cartService.deleteCartByUser(user.getId());
            List<OrderDetails> detailList = orderDetailsService.findOrderDetailsByOrderId(order.getOrderId());
            return new ResponseEntity<>(detailList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }

    @PostMapping("/return/paynow/{address}/{note}/{phone}/{name}/{username}/{idProduct}")
    public ResponseEntity<?> addOrderPayNow(@PathVariable String username, @PathVariable int idProduct, @PathVariable String address, @PathVariable String note, @PathVariable String phone, @PathVariable String name) {

        try {
            User user = userService.findUserByAccountId(username);
            Date date = new Date();
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd hh:mm:ss");
            String formattedDate = dateFormat.format(date);
            Order order = new Order(formattedDate, name, phone, address, false, note, user);
            Order order1 = orderService.addOrder(order);
            Product product = productService.findProductByProductId(idProduct);
            OrderDetails orderDetail = new OrderDetails(1, product, order1);
            orderDetailsService.addOrderDetails(orderDetail);
            productService.updateQuantityProductById(product.getQuantity() - 1,
                    product.getProductId());
            List<OrderDetails> detailList = orderDetailsService.findOrderDetailsByOrderId(order.getOrderId());
            return new ResponseEntity<>(detailList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }
}

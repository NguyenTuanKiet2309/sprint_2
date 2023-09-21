package com.example.rolex_be.controller;

import com.example.rolex_be.model.Account;
import com.example.rolex_be.model.ShoppingCart;
import com.example.rolex_be.model.Product;
import com.example.rolex_be.model.User;
import com.example.rolex_be.security.jwt.JwtProvider;
import com.example.rolex_be.service.IAccountService;
import com.example.rolex_be.service.ICartService;
import com.example.rolex_be.service.IProductService;
import com.example.rolex_be.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private ICartService cartService;
    @Autowired
    private JwtProvider provider;
    @Autowired
    private IUserService userService;
    @Autowired
    private IProductService productService;
    @Autowired
    private IAccountService accountService;


    @PostMapping("/add/{idProduct}")
    public ResponseEntity<?> addProductToCart(@PathVariable int idProduct) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userService.findUserByAccountId(email);
        Product product = productService.findProductByProductId(idProduct);
        ShoppingCart oldCart = cartService.getQuantityProductByUser(user.getId(), product.getProductId());
        if (oldCart == null) {
            ShoppingCart cart = new ShoppingCart(1, user, product);
            cartService.addCart(cart);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            ShoppingCart cart = new ShoppingCart(oldCart.getIdShoppingCart(), oldCart.getQuantity() + 1, user, product);
            cartService.addCart(cart);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }


    @PostMapping("/add/{idProduct}/{num}")
    public ResponseEntity<?> addProductToCartDetail(@PathVariable int idProduct, @PathVariable int num) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userService.findUserByAccountId(email);
        Product product = productService.findProductByProductId(idProduct);
        ShoppingCart oldCart = cartService.getQuantityProductByUser(user.getId(), product.getProductId());
        if (oldCart == null) {
            ShoppingCart cart = new ShoppingCart(num, user, product);
            cartService.addCart(cart);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            ShoppingCart cart = new ShoppingCart(oldCart.getIdShoppingCart(), oldCart.getQuantity() + num, user, product);
            cartService.addCart(cart);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @PostMapping("/minius/{idProduct}")
    public ResponseEntity<?> miniusProductOnCart(@PathVariable int idProduct) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userService.findUserByAccountId(email);
        Product product = productService.findProductByProductId(idProduct);
        ShoppingCart oldCart = cartService.getQuantityProductByUser(user.getId(), product.getProductId());
        if (oldCart == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            if (oldCart.getQuantity() > 1) {
                ShoppingCart cart = new ShoppingCart(oldCart.getIdShoppingCart(), oldCart.getQuantity() - 1, user, product);
                cartService.addCart(cart);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @DeleteMapping("/delete/{idProduct}")
    public ResponseEntity<?> deleteProductOnCart(@PathVariable int idProduct) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userService.findUserByAccountId(email);
        Product product = productService.findProductByProductId(idProduct);
        try {
            cartService.deleteProduct(user.getId(), product.getProductId());
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/list")
    public ResponseEntity<List<ShoppingCart>> getListCartByUser(HttpServletRequest httpServletRequest) {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        String email = authentication.getName();
//        User user = userService.findUserByEmail(email).get();

        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        String email = provider.getUserNameFromToken(token);
        User user = userService.findUserByAccountId(email);
        return new ResponseEntity<>(cartService.getListCartByUser(user.getId()), HttpStatus.OK);
    }


    @GetMapping("/product-on-cart")
    public ResponseEntity<Integer> countTotalProductByUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userService.findUserByAccountId(email);
        Integer num = cartService.countTotalProductByUser(user.getId());
        if (num == null) {
            num = 0;
        }
        return new ResponseEntity<>(num, HttpStatus.OK);
    }

    @GetMapping("/count-product/{idProduct}")
    public ResponseEntity<Integer> countQuantityProductByProductId(@PathVariable("idProduct") int idProduct) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userService.findUserByAccountId(email);
        Integer num = cartService.getQuantityByProductId(idProduct,user.getId());
        return new ResponseEntity<>(num, HttpStatus.OK);
    }


}
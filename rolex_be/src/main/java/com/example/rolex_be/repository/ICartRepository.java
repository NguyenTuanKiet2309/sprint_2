package com.example.rolex_be.repository;

import com.example.rolex_be.model.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ICartRepository extends JpaRepository<ShoppingCart,Integer> {
    @Query(value = "SELECT * FROM shopping_cart\n" +
            "where user_id = :idUser \n" +
            "and product_id = :idProduct",nativeQuery = true)
    ShoppingCart getQuantityProductByUser(@Param("idUser") int idUser, @Param("idProduct") int idProduct);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM shopping_cart \n" +
            "WHERE user_id = :idUser \n" +
            "and product_id = :idProduct",nativeQuery = true)
    void deleteProduct(@Param("idUser") int idUser, @Param("idProduct") int idProduct);

    List<ShoppingCart> findAllByUserId(int idUser);

    @Query(value = "SELECT count(*) FROM shopping_cart \n" +
            "where user_id = :idUser",nativeQuery = true)
    Integer countTotalProductByUser(@Param("idUser") int idUser);
    @Modifying
    @Transactional
    @Query(value = "DELETE FROM shopping_cart WHERE user_id = :idUser",nativeQuery = true)
    void deleteCartByUser (@Param("idUser") int idUser);

    @Query(value = "   SELECT quantity FROM shopping_cart\n" +
            "            where product_id = :idProduct and user_id = :idUser",nativeQuery = true)
    Integer getQuantityProductByProductId(@Param("idProduct") int idProduct,@Param("idUser") int idUser);

}

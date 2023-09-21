package com.example.rolex_be.repository;

import com.example.rolex_be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {

    @Query(nativeQuery = true, value = "select * from product p join category c on c.category_id = p.category_id where p.quantity>0 and c.category_name = :categoryName")
    Page<Product> findProductByCategoryId(Pageable pageable, @Param("categoryName") String categoryName);

    @Query(nativeQuery = true, value = "SELECT * FROM product p " +
            "                JOIN category c ON p.category_id = c.category_id " +
            "                JOIN type_product tp ON p.type_id = tp.type_id " +
            "                WHERE p.quantity > 0 " +
            "                AND c.category_name like concat('%',:categoryName,'%') " +
            "                AND tp.type_name like concat('%',:typeName,'%') " +
            "                AND p.material like concat('%',:material,'%')")
    Page<Product> findProductSearch(Pageable pageable, @Param("categoryName") String categoryName, @Param("typeName") String typeName, @Param("material") String material);


    @Query(nativeQuery = true, value = "SELECT * FROM product p " +
            "                JOIN category c ON p.category_id = c.category_id " +
            "                JOIN type_product tp ON p.type_id = tp.type_id " +
            "                WHERE p.quantity > 0 " +
            "                AND c.category_name like concat('%',:categoryName,'%') " +
            "                AND tp.type_name like concat('%',:typeName,'%') " +
            "                AND p.material like concat('%',:material,'%') " +
            "                AND p.size BETWEEN :min AND :max")
    Page<Product> findProductSearchAdvanced(Pageable pageable, @Param("categoryName") String categoryName, @Param("typeName") String typeName, @Param("material") String material,int min,int max);


    @Query(nativeQuery = true, value = "SELECT * FROM product p " +
            "                JOIN category c ON p.category_id = c.category_id " +
            "                JOIN type_product tp ON p.type_id = tp.type_id " +
            "                WHERE p.quantity > 0 " +
            "                AND c.category_name like concat('%',:categoryName,'%') " +
            "                AND tp.type_name like concat('%',:typeName,'%') " +
            "                AND p.material like concat('%',:material,'%') " +
            "                AND p.size BETWEEN :min AND :max")
    Page<Product> findProductSearchMedium(Pageable pageable, @Param("categoryName") String categoryName, @Param("typeName") String typeName, @Param("material") String material,int min,int max);
    @Query(nativeQuery = true, value = "SELECT * FROM product p" +
            "                JOIN category c ON p.category_id = c.category_id" +
            "                JOIN type_product tp ON p.type_id = tp.type_id" +
            "                WHERE p.quantity > 0" +
            "                AND c.category_name like concat('%',:categoryName,'%')" +
            "                AND tp.type_name like  concat('%',:typeName,'%')" +
            "                AND p.material like concat('%',:material,'%')" +
            "                AND p.size BETWEEN :min AND :max")
    Page<Product> findProductSearchBig(Pageable pageable, @Param("categoryName") String categoryName, @Param("typeName") String typeName, @Param("material") String material,int min,int max);
    @Query(nativeQuery = true, value = "select * from product p join category c on c.category_id = p.category_id where p.quantity>0 and p.category_id = :categoryId")
    List<Product> findSameProductByCategoryId(@Param("categoryId") int categoryId);

    @Query(nativeQuery = true, value = "select * from product p join type_product tp on tp.type_id = p.type_id where p.quantity>0 and tp.type_name like concat('%',:typeName,'%')")
    Page<Product> findProductByGender(Pageable pageable, @Param("typeName") String typeName);

    @Query(nativeQuery = true, value = "select * from product p join category c on c.category_id = p.category_id where p.quantity>0 and p.product_id = :productId")
    Product findProductByProductId(@Param("productId") int productId);

    @Query(nativeQuery = true, value = "select * from product p join category c on c.category_id = p.category_id where p.quantity>0 and p.product_id = :productId and p.category_id = :categoryId ")
    Product findProductByProductIdAndCategoryId(@Param("productId") int productId, @Param("categoryId") int categoryId);

    @Query(nativeQuery = true, value = "select * from product limit 6")
    Page<Product> findProductMore(Pageable pageable);

    @Query(nativeQuery = true, value = "select * from product p join category c on p.category_id = c.category_id where p.quantity>0 and c.category_name like concat('%',:categoryName,'%')  order by p.price ASC")
    Page<Product> productASC(Pageable pageable, @Param("categoryName") String categoryName);

    @Query(nativeQuery = true, value = "select * from product p join category c on p.category_id = c.category_id where p.quantity>0 and c.category_name like concat('%',:categoryName,'%') order by p.price DESC")
    Page<Product> productDESC(Pageable pageable, @Param("categoryName") String categoryName);

    @Modifying
    @Transactional
    @Query(value = "UPDATE product SET quantity = :quantity WHERE product_id = :idProduct", nativeQuery = true)
    void updateQuantityProductById(@Param("quantity") int quantity, @Param("idProduct") int idProduct);

    @Query(value = "SELECT p.quantity FROM product p WHERE p.product_id = :idProduct",nativeQuery = true)
    Integer getProductQuantity(@Param("idProduct") int idProduct);
}

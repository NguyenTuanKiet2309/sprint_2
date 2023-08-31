package com.example.rolex_be.model;

import javax.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;
    private String productName;
    private String productCode;
    private double price;
    private int quantity;
    private String image;
    private int size;
    private String material;
    private String color;
    private String dateAt;
    private boolean productStatus;
    @OneToOne
    private Category categoryId;
    @OneToOne
    private TypeProduct typeId;

    public Product() {
    }

    public Product(int productId, String productName, String productCode, double price, int quantity, String image, int size, String material, String color, String dateAt, boolean productStatus, Category categoryId, TypeProduct typeId) {
        this.productId = productId;
        this.productName = productName;
        this.productCode = productCode;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
        this.size = size;
        this.material = material;
        this.color = color;
        this.dateAt = dateAt;
        this.productStatus = productStatus;
        this.categoryId = categoryId;
        this.typeId = typeId;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getDateAt() {
        return dateAt;
    }

    public void setDateAt(String dateAt) {
        this.dateAt = dateAt;
    }

    public boolean isProductStatus() {
        return productStatus;
    }

    public void setProductStatus(boolean productStatus) {
        this.productStatus = productStatus;
    }

    public Category getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Category categoryId) {
        this.categoryId = categoryId;
    }

    public TypeProduct getTypeId() {
        return typeId;
    }

    public void setTypeId(TypeProduct typeId) {
        this.typeId = typeId;
    }
}

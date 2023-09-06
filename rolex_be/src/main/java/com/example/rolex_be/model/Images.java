package com.example.rolex_be.model;

import javax.persistence.*;

@Entity
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int imageId;
    @Column(columnDefinition = "LongText")
    private String imageUrl;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product productId;

    public Images() {
    }

    public Images(int imageId, String imageUrl, Product productId) {
        this.imageId = imageId;
        this.imageUrl = imageUrl;
        this.productId = productId;
    }

    public int getImageId() {
        return imageId;
    }

    public void setImageId(int imageId) {
        this.imageId = imageId;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Product getProductId() {
        return productId;
    }

    public void setProductId(Product productId) {
        this.productId = productId;
    }
}

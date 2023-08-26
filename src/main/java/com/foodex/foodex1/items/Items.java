package com.foodex.foodex1.items;

import com.foodex.foodex1.cart.Cart;
import com.foodex.foodex1.item_images.Item_images;
import com.foodex.foodex1.item_rate.Item_rate;
import com.foodex.foodex1.restaurants.Restaurants;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "items")
public class Items {
    @Id
    private Long item_id;
    private String item_name;
    private Float price;
    private Float rating;
    private String description;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "res_id", referencedColumnName = "res_id", foreignKey = @ForeignKey(name = "fk_items_restaurants"))
    private Restaurants restaurants;
    @OneToMany(mappedBy = "items", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Item_images> item_images;
//    @OneToMany(mappedBy = "items", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Cart> cart;
    @OneToMany(mappedBy = "items", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Item_rate> item_rate;

//    public Items(Long item_id, String item_name, Float price, Float rating, String description, Restaurants restaurants, List<Item_images> item_images, List<Item_rate> item_rate, List<Cart> cart) {
public Items(Long item_id, String item_name, Float price, Float rating, String description, Restaurants restaurants, List<Item_images> item_images, List<Item_rate> item_rate) {
        this.item_id = item_id;
        this.item_name = item_name;
        this.price = price;
        this.rating = rating;
        this.description = description;
        this.restaurants = restaurants;
        this.item_images = item_images;
        this.item_rate = item_rate;
//        this.cart = cart;
    }

    public Items() {
    }

    public Long getItem_id() {
        return item_id;
    }

    public void setItem_id(Long item_id) {
        this.item_id = item_id;
    }

    public String getItem_name() {
        return item_name;
    }

    public void setItem_name(String item_name) {
        this.item_name = item_name;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Float getRating() {
        return rating;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Restaurants getRestaurants() {
        return restaurants;
    }

    public void setRestaurants(Restaurants restaurants) {
        this.restaurants = restaurants;
    }

    public List<Item_images> getItem_images() {
        return item_images;
    }

    public void setItem_images(List<Item_images> item_images) {
        this.item_images = item_images;
    }

    public List<Item_rate> getItem_rate() {
        return item_rate;
    }

//    public List<Cart> getCart() {
//        return cart;
//    }

    public void setItem_rate(List<Item_rate> item_rate) {
        this.item_rate = item_rate;
    }
}

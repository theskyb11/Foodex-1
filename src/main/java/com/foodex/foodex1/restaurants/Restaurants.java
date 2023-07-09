package com.foodex.foodex1.restaurants;

import com.foodex.foodex1.cart.Cart;
import com.foodex.foodex1.items.Items;
import com.foodex.foodex1.offers.Offers;
import com.foodex.foodex1.res_images.Res_images;
import com.foodex.foodex1.res_rate.Res_rate;
import com.foodex.foodex1.users.Users;
import jakarta.persistence.*;

import java.time.LocalTime;
import java.util.List;

@Entity
@Table(name = "restaurants")
public class Restaurants {
    @Id
    private Long res_id;
    private String res_name;
    private String manager;
    private String email;
    private Long phone;
    private String address;
    private Long res_phone;
    private String cuisine;
    private Integer type;
    private float rating;
    private LocalTime openingTime;
    private LocalTime closingTime;
    @OneToMany(mappedBy = "restaurants", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Items> items;
    @OneToMany(mappedBy = "restaurants", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Res_images> res_images;
    @OneToMany(mappedBy = "restaurants", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Cart> cart;
    @OneToMany(mappedBy = "restaurants", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Res_rate> res_rate;
    @OneToMany(mappedBy = "restaurants", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Offers> offers;
    @ManyToOne
    @JoinColumn(name = "username", referencedColumnName = "username", foreignKey = @ForeignKey(name = "fk_restaurants_users"))
    private Users users;

    public Restaurants(Long res_id, String res_name, String manager, String email, Long phone, String address, Long res_phone, String cuisine, Integer type, float rating, LocalTime openingTime, LocalTime closingTime, List<Items> items, List<Res_images> res_images, List<Res_rate> res_rate, Users users, List<Cart> cart, List<Offers> offers) {
        this.res_id = res_id;
        this.res_name = res_name;
        this.manager = manager;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.res_phone = res_phone;
        this.cuisine = cuisine;
        this.type = type;
        this.rating = rating;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
        this.items = items;
        this.res_images = res_images;
        this.res_rate = res_rate;
        this.users = users;
        this.cart = cart;
        this.offers = offers;
    }

    public Restaurants() {

    }

    public Long getRes_id() {
        return res_id;
    }

    public void setRes_id(Long res_id) {
        this.res_id = res_id;
    }

    public String getRes_name() {
        return res_name;
    }

    public void setRes_name(String res_name) {
        this.res_name = res_name;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getRes_phone() {
        return res_phone;
    }

    public void setRes_phone(Long res_phone) {
        this.res_phone = res_phone;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public LocalTime getOpeningTime() {
        return openingTime;
    }

    public void setOpeningTime(LocalTime openingTime) {
        this.openingTime = openingTime;
    }

    public LocalTime getClosingTime() {
        return closingTime;
    }

    public void setClosingTime(LocalTime closingTime) {
        this.closingTime = closingTime;
    }

    public List<Items> getItems() {
        return items;
    }

    public void setItems(List<Items> items) {
        this.items = items;
    }

    public List<Res_images> getRes_images() {
        return res_images;
    }

    public void setRes_images(List<Res_images> res_images) {
        this.res_images = res_images;
    }

    public List<Res_rate> getRes_rate() {
        return res_rate;
    }

    public List<Cart> getCart() {
        return cart;
    }

    public void setCart(List<Cart> cart) {
        this.cart = cart;
    }
    public List<Offers> getOffers() {
        return offers;
    }
    public void setOffers(List<Offers> offers) {
        this.offers = offers;
    }

    public void setRes_rate(List<Res_rate> res_rate) {
        this.res_rate = res_rate;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

}

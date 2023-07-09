package com.fullstack.foodex1.model;

import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import java.time.LocalTime;

@Entity
@Table(name = "Restaurant")
public class Restaurants {
    @Id
    private Integer res_id;
    private String res_name;
    private String manager;
    private String email;
    private Integer phone;
    private String address;
    private Integer res_phone;

    @ManyToOne
    @JoinColumn(name = "username", referencedColumnName = "username", foreignKey = @ForeignKey(name = "fk_restaurants_users"))
    private User user;

    private String cuisine;
    private Integer type;
    private float rating;
    private LocalTime openingTime;
    private LocalTime closingTime;
    public Restaurants() {

    }


    // Getter and Setter for res_id
    public Integer getRes_id() {
        return res_id;
    }

    public void setRes_id(Integer res_id) {
        this.res_id = res_id;
    }

    // Getter and Setter for res_name
    public String getRes_name() {
        return res_name;
    }

    public void setRes_name(String res_name) {
        this.res_name = res_name;
    }

    // Getter and Setter for manager
    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    // Getter and Setter for email
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Getter and Setter for phone
    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    // Getter and Setter for address
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    // Getter and Setter for res_phone
    public Integer getRes_phone() {
        return res_phone;
    }

    public void setRes_phone(Integer res_phone) {
        this.res_phone = res_phone;
    }

    // Getter and Setter for user
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    // Getter and Setter for cuisine
    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    // Getter and Setter for type
    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    // Getter and Setter for rating
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

    public Restaurants(Integer res_id, String res_name, String manager, String email, Integer phone, String address, Integer res_phone, User user, String cuisine, Integer type, float rating, LocalTime openingTime,LocalTime closingTime) {
        this.res_id = res_id;
        this.res_name = res_name;
        this.manager = manager;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.res_phone = res_phone;
        this.user = user;
        this.cuisine = cuisine;
        this.type = type;
        this.rating = rating;
        this.closingTime=closingTime;
        this.openingTime=openingTime;
    }
}

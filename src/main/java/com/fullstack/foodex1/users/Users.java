package com.fullstack.foodex1.users;

import com.fullstack.foodex1.res_rate.Res_rate;
import com.fullstack.foodex1.restaurants.Restaurants;
import com.fullstack.foodex1.item_rate.Item_rate;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Users")
public class Users {
    @Id
    private String username;
    private String name;
    private Integer phone;
    private String email;
    private String address;
    private String password;
    private String twofa;
    private String secretcode;
    @Column(name = "created_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date created_at;

    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Restaurants> restaurants;

    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Res_rate> res_rate;

    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Item_rate> item_rate;

    public Users(String username, String name, Integer phone, String email, String address, String password, String twofa, String secretcode, Date created_at, List<Restaurants> restaurants, List<Res_rate> res_rate, List<Item_rate> item_rate) {
        this.username = username;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.password = password;
        this.twofa = twofa;
        this.secretcode = secretcode;
        this.created_at = created_at;
        this.restaurants = restaurants;
        this.res_rate = res_rate;
        this.item_rate = item_rate;
    }

    public Users() {

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTwofa() {
        return twofa;
    }

    public void setTwofa(String twofa) {
        this.twofa = twofa;
    }

    public String getSecretcode() {
        return secretcode;
    }

    public void setSecretcode(String secretcode) {
        this.secretcode = secretcode;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public List<Restaurants> getRestaurants() {
        return restaurants;
    }

    public void setRestaurants(List<Restaurants> restaurants) {
        this.restaurants = restaurants;
    }

    public List<Res_rate> getRes_rate() {
        return res_rate;
    }

    public void setRes_rate(List<Res_rate> res_rate) {
        this.res_rate = res_rate;
    }

    public List<Item_rate> getItem_rate() {
        return item_rate;
    }

    public void setItem_rate(List<Item_rate> item_rate) {
        this.item_rate = item_rate;
    }
}

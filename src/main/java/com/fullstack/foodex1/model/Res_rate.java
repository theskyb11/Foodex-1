package com.fullstack.foodex1.model;

import jakarta.persistence.*;


@Entity
@Table(name = "res_rate")
public class Res_rate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username",insertable = false, updatable = false)
    private String username;

    @Column(name = "res_id", insertable = false, updatable = false)
    private Integer res_id;

    @Column(name = "rating")
    private float rating;

    @ManyToOne
    @JoinColumn(name = "username", referencedColumnName = "username", foreignKey = @ForeignKey(name = "fk_res_rate_users"))
    private User user;

    @ManyToOne
    @JoinColumn(name = "res_id", referencedColumnName = "res_id", foreignKey = @ForeignKey(name = "fk_res_rate_restaurants"))
    private Restaurants restaurants;

    public Res_rate() {
    }

    public Res_rate(String username, Integer res_id, float rating) {
        this.username = username;
        this.res_id = res_id;
        this.rating = rating;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getRes_id() {
        return res_id;
    }

    public void setRes_id(Integer res_id) {
        this.res_id = res_id;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Restaurants getRestaurants() {
        return restaurants;
    }

    public void setRestaurant(Restaurants restaurants) {
        this.restaurants = restaurants;
    }
}

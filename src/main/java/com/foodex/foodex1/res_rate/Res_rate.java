package com.foodex.foodex1.res_rate;

import com.foodex.foodex1.users.Users;
import com.foodex.foodex1.restaurants.Restaurants;
import jakarta.persistence.*;


@Entity
@Table(name = "res_rate",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"username", "res_id", "ratings"})
        })
public class Res_rate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "username",insertable = false, updatable = false)
    private String username;
    @Column(name = "res_id", insertable = false, updatable = false)
    private Long res_id;
    @Column(name = "ratings")
    private float ratings;
    @ManyToOne
    @JoinColumn(name = "username", referencedColumnName = "username", foreignKey = @ForeignKey(name = "fk_res_rate_users"))
    private Users users;
    @ManyToOne
    @JoinColumn(name = "res_id", referencedColumnName = "res_id", foreignKey = @ForeignKey(name = "fk_res_rate_restaurants"))
    private Restaurants restaurants;

    public Res_rate(Long id, String username, Long res_id, float ratings, Users users, Restaurants restaurants) {
        this.id = id;
        this.username = username;
        this.res_id = res_id;
        this.ratings = ratings;
        this.users = users;
        this.restaurants = restaurants;
    }

    public Res_rate() {

    }

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

    public Long getRes_id() {
        return res_id;
    }

    public void setRes_id(Long res_id) {
        this.res_id = res_id;
    }

    public float getRating() {
        return ratings;
    }

    public void setRating(float ratings) {
        this.ratings = ratings;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public Restaurants getRestaurants() {
        return restaurants;
    }

    public void setRestaurants(Restaurants restaurants) {
        this.restaurants = restaurants;
    }
}

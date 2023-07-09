package com.foodex.foodex1.cart;

import com.foodex.foodex1.items.Items;
import com.foodex.foodex1.restaurants.Restaurants;
import com.foodex.foodex1.users.Users;
import jakarta.persistence.*;

@Entity
@Table(name = "cart",
        uniqueConstraints = @UniqueConstraint(name = "unique_cart_username_item_id", columnNames = {"username", "item_id"}))

public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer quantity;

    @ManyToOne
    @JoinColumn(name = "username", referencedColumnName = "username",
            foreignKey = @ForeignKey(name = "fk_cart_users"))
    private Users users;

    @ManyToOne
    @JoinColumn(name = "item_id", referencedColumnName = "item_id",
            foreignKey = @ForeignKey(name = "fk_cart_items"),
            insertable = false, updatable = false) // Add these attributes
    private Items items;

    @ManyToOne
    @JoinColumn(name = "res_id", referencedColumnName = "res_id",
            foreignKey = @ForeignKey(name = "fk_cart_restaurants"))
    private Restaurants restaurants;

    public Cart() {
    }

    public Cart(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public Items getItems() {
        return items;
    }

    public void setItems(Items items) {
        this.items = items;
    }

    public Restaurants getRestaurants() {
        return restaurants;
    }

    public void setRestaurants(Restaurants restaurants) {
        this.restaurants = restaurants;
    }


}

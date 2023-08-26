package com.foodex.foodex1.cart;

import jakarta.persistence.*;

@Entity
@Table(
        name = "cart",
        uniqueConstraints = @UniqueConstraint(name = "unique_cart_username_item_id", columnNames = {"username", "item_id"})
)
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column (name="item_id")
    private Long itemId;

    public Cart() {
    }

    private Long res_id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Long getItemId() {
        return itemId;
    }

    public void setItemId(Long itemId) {
        this.itemId = itemId;
    }

    public Long getRes_id() {
        return res_id;
    }

    public void setRes_id(Long res_id) {
        this.res_id = res_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Cart(Integer id, Long itemId, Long res_id, String username, Integer quantity) {
        this.id = id;
        this.itemId = itemId;
        this.res_id = res_id;
        this.username = username;
        this.quantity = quantity;
    }

    private String username;

    private Integer quantity;

    // ... other variables, constructors, getters, setters
}
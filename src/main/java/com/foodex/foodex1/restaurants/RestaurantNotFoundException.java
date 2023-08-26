package com.foodex.foodex1.restaurants;

public class RestaurantNotFoundException extends RuntimeException {

    public RestaurantNotFoundException(Long id) {
        super("Restaurant with id " + id + " not found");
    }
}

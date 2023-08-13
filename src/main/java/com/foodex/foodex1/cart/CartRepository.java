package com.foodex.foodex1.cart;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Integer> {
    Optional <Cart> findByUsers_Username(String username);

    default Cart findByUsers_UsernameAndItemId(String username, Long item_id) {
        return null;
    }
}

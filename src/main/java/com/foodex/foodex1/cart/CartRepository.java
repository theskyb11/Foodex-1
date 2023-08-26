package com.foodex.foodex1.cart;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface CartRepository extends JpaRepository<Cart, Integer> {
//    Cart findByUsernameAndItemId(String username, Long item_id);
//Cart findByUsernameAndItemId(String username, Long itemId);

    List<Cart> findByUsername(String username);


    List<Cart> findByUsernameAndItemId (String username, Long itemId);


}
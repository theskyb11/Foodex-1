package com.foodex.foodex1.cart;

import com.foodex.foodex1.items.Items;
import com.foodex.foodex1.restaurants.Restaurants;
import com.foodex.foodex1.users.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("https://localhost/3000/")
public class CartController {

    private final CartRepository cartRepository;

    @Autowired
    public CartController(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @PostMapping("/cart/add")
    public Cart addToCart(@RequestBody Cart cart) {
        // You may need to handle creating or updating the cart item here
        return cartRepository.save(cart);
    }

    @PutMapping("/update")
    public Cart updateToCart(@RequestBody Cart cart){
        return cartRepository.save(cart);
    }

    @PostMapping("/remove")
    public void removeFromCart(@RequestBody Cart cart) {
        // You may need to handle deleting the cart item here
        cartRepository.delete(cart);
    }

    @GetMapping("/cart/user/{username}/{item_id}")
    public Integer getQuantityByUserAndItem(@PathVariable String username, @PathVariable Long item_id) {
        Cart cart = cartRepository.findByUsers_UsernameAndItemId(username, item_id);
        if (cart != null) {
            return cart.getQuantity();
        } else {
            return null;
        }
    }
}

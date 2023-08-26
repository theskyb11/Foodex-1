package com.foodex.foodex1.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private final CartRepository cartRepository;

    public CartController(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

//    @GetMapping("/check/{username}/{item_id}")
//    public ResponseEntity<Boolean> checkCartItem(@PathVariable String username, @PathVariable Long item_id) {
//        // Search for a cart item with the given username and item_id
//        Cart cartItem = cartRepository.findByUsernameAndItemId(username, item_id);
//
//        boolean isItemInCart = cartItem != null;
//        return new ResponseEntity<>(isItemInCart, HttpStatus.OK);
//    }


//    public CartController(CartRepository cartRepository) {
//        this.cartRepository = cartRepository;
//    }

//    @GetMapping("/check/{username}")
//    public List<Cart> getCartByUsername(@PathVariable String username) {
//        return cartRepository.findByUsername(username);
//    }

    @GetMapping("/check/{username}/{item_id}")
    public List<Cart> getCartByUsernameAndItemId(@PathVariable String username, @PathVariable Long item_id) {
        return cartRepository.findByUsernameAndItemId(username, item_id);
    }

    @PostMapping("/add")
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

//    @GetMapping("/check/{username}/{item_id}")
//    public boolean checkCartItem(@PathVariable String username, @PathVariable Long item_id) {
//        Cart cart = cartRepository.findByUsernameAndItemId(username, item_id);
//        return cart != null;
//    }
}
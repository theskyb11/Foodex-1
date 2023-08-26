package com.foodex.foodex1.restaurants;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")  // Adjust the correct URL
public class RestaurantController {
    @Autowired
    private RestaurantRepository restaurantsRepository;

    @PostMapping("/restaurant")
    Restaurants newRestaurant(@RequestBody Restaurants newRestaurant) {
        return restaurantsRepository.save(newRestaurant);
    }

    @GetMapping("/restaurants")
    List<Restaurants> getAllRestaurants() {
        return restaurantsRepository.findAll();
    }

    @GetMapping("/restaurants/{res_id}")
    Restaurants getRestaurantById(@PathVariable Long res_id) {
        return restaurantsRepository.findById(res_id)
                .orElseThrow(() -> new RestaurantNotFoundException(res_id));
    }

    @PutMapping("/restaurants/{res_id}")
    Restaurants updateRestaurant(@RequestBody Restaurants newRestaurant, @PathVariable Long res_id) {
        return restaurantsRepository.findById(res_id)
                .map(restaurant -> {
                    restaurant.setRes_name(newRestaurant.getRes_name());
                    restaurant.setManager(newRestaurant.getManager());
                    // Update other fields similarly
                    return restaurantsRepository.save(restaurant);
                })
                .orElseThrow(() -> new RestaurantNotFoundException(res_id));
    }

    @DeleteMapping("/restaurants/{res_id}")
    String deleteRestaurant(@PathVariable Long res_id) {
        if (!restaurantsRepository.existsById(res_id)) {
            throw new RestaurantNotFoundException(res_id);
        }

        restaurantsRepository.deleteById(res_id);
        return "Restaurant with res_id = " + res_id + " has been deleted successfully!!!";
    }
}

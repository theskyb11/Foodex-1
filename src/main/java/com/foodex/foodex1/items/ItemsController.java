package com.foodex.foodex1.items;

import com.foodex.foodex1.restaurants.Restaurants;
import com.foodex.foodex1.users.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin("https://localhost/3000/")
public class ItemsController {

    @Autowired
    private ItemsRepository itemsRepository;

    @GetMapping("/itemss")
    public List<Items> getAllItems() {
        return itemsRepository.findAll();
    }

    @GetMapping("/items/{type}")
    public List<Map<String, Object>> getItemsByType(@PathVariable String type) {
        List<Items> items = null;

        if (type.equalsIgnoreCase("All")) {
            items = itemsRepository.findAll();
        } else if (type.equals("international")) {
            List<String> cuisineTypes = Arrays.asList(
                    "Non-veg", "Afghan", "African", "American", "Arabian", "Asian Fusion", "Asian",
                    "Australian", "Bangladeshi", "Fusion", "German", "Greek", "Oriental", "Pakistani",
                    "Pan Asian", "Panini", "Peruvian", "Pizza", "Belgian", "Brazilian", "British", "Burmese",
                    "Cantonese", "Chinese", "Continental", "Egyptian", "Ethiopian", "European", "French",
                    "Indonesian", "Iranian", "Irish", "Israeli", "Italian", "Japanese", "Korean", "Lebanese",
                    "Malaysian", "Mangalorean", "Mediterranean", "Mexican", "Middle Eastern", "Momos",
                    "Mongolian", "Moroccan", "Mughlai", "Naga", "Poké", "Portuguese", "Russian",
                    "Singaporean", "South American", "Spanish", "Sri Lankan", "Sushi", "Swedish",
                    "Tex-Mex", "Thai", "Tibetan", "Turkish", "Vietnamese"
            );
            items = itemsRepository.findByCuisine(cuisineTypes);
        } else if (type.equals("desi")) {
            List<String> cuisineTypes = Arrays.asList(
                    "Andhra", "Assamese", "Awadhi", "Garhawali", "Goan", "Gujarati", "Himachali",
                    "Hyderabadi", "Nepalese", "North Eastern", "North Indian", "Odia", "Parsi",
                    "Bengali", "Bihari", "Biryani", "Bohri", "Chettinad", "Indian", "Kashmiri",
                    "Kebab", "Kerala", "Konkan", "Lucknowi", "Malwani", "Mandi", "Maharashtrian",
                    "Modern Indian", "Mughlai", "Naga", "Rajasthani", "Sindhi", "South Indian",
                    "Tamil"
            );
            items = itemsRepository.findByCuisine(cuisineTypes);
        } else if (type.equals("snacks")) {
            List<String> cuisineTypes = Arrays.asList(
                    "Burger", "Cafe", "Cafe Food", "Fast Food", "Finger Food", "Sandwich",
                    "Street Food", "Wraps", "Rolls", "Chili"
            );
            items = itemsRepository.findByCuisine(cuisineTypes);
        } else if (type.equals("miscs")) {
            List<String> cuisineTypes = Arrays.asList(
                    "Bakery", "Frozen Yogurt", "Healthy Food", "Paan", "Cake",
                    "Desserts", "Ice Cream", "Salad", "Bar food"
            );
            items = itemsRepository.findByCuisine(cuisineTypes);
        } else if (type.equals("drinks")) {
            List<String> cuisineTypes = Arrays.asList(
                    "Beverages", "Bubble Tea", "Coffee", "Coffee and Tea",
                    "Drinks Only", "Juices", "Tea"
            );
            items = itemsRepository.findByCuisine(cuisineTypes);
        } else if (type.equals("sweets")) {
            List<String> cuisineTypes = Arrays.asList(
                    "Mishti", "Mithai"
            );
            items = itemsRepository.findByCuisine(cuisineTypes);
        } else if (type.equals("nonveg")) {
            List<String> cuisineTypes = Arrays.asList(
                    "Fried Chicken", "Grill", "BBQ", "Charcoal Chicken", "Raw Meats",
                    "Roast Chicken", "Seafood", "Steak"
            );
            items = itemsRepository.findByCuisine(cuisineTypes);
        }

        List<Map<String, Object>> formattedItems = new ArrayList<>();
        for (Items item : items) {
            Map<String, Object> formattedItem = new HashMap<>();
            formattedItem.put("itemid", item.getItem_id());
            Restaurants restaurant = item.getRestaurants();
            if (restaurant != null) {
                formattedItem.put("resid", restaurant.getRes_id());
            }
            formattedItem.put("name", item.getItem_name());
            formattedItem.put("price", item.getPrice());
            formattedItem.put("rating", item.getRating());
            formattedItems.add(formattedItem);
        }

        return formattedItems;
    }
}

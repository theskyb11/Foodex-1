package com.foodex.foodex1.items;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemsRepository extends JpaRepository<Items, Long> {
    // Custom query method to find items by cuisine
    @Query("SELECT i FROM Items i JOIN i.restaurants r WHERE r.cuisine = ?1")
    List<Items> findByCuisine(List<String> cuisine);
}

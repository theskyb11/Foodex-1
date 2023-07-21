package com.foodex.foodex1.user_images;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface User_ImagesRepository extends JpaRepository<User_Images, Integer> {
}


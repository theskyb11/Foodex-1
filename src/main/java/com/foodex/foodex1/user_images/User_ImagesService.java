package com.foodex.foodex1.user_images;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class User_ImagesService {
    @Autowired
    private User_ImagesRepository userImageRepository;

    public User_ImagesService(User_ImagesRepository userImageRepository) {
        this.userImageRepository = userImageRepository;
    }

    public User_Images saveUserImage(User_Images userImage) {
        return userImageRepository.save(userImage);
    }

    public User_Images getUserImageById(int id) {
        return userImageRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("UserImage with id " + id + " not found."));
    }

    public void deleteUserImageById(int id) {
        if (!userImageRepository.existsById(id)) {
            throw new EntityNotFoundException("UserImage with id " + id + " not found.");
        }
        userImageRepository.deleteById(id);
    }

    // Add more methods as needed for other CRUD operations

}


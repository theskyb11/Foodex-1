package com.foodex.foodex1.user_images;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public List<User_Images> getAllUserImages() {
        return userImageRepository.findAll();
    }

    public User_Images getUserImageById(String id) {
        return userImageRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("UserImage with id " + id + " not found."));
    }

    public void deleteUserImageById(String id) {
        if (!userImageRepository.existsById(id)) {
            throw new EntityNotFoundException("UserImage with id " + id + " not found.");
        }
        userImageRepository.deleteById(id);
    }
}


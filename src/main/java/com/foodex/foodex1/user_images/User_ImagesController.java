package com.foodex.foodex1.user_images;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("https://localhost/3000/")
public class User_ImagesController {

    private final User_ImagesService userImageService;

    @Autowired
    public User_ImagesController(User_ImagesService userImageService) {
        this.userImageService = userImageService;
    }

    @GetMapping("/user_images")
    public ResponseEntity<List<User_Images>> getAllUserImages() {
        List<User_Images> userImages = userImageService.getAllUserImages();
        return new ResponseEntity<>(userImages, HttpStatus.OK);
    }

    @PostMapping("/user_image")
    public ResponseEntity<User_Images> saveUserImage(@RequestBody User_Images userImage) {
        User_Images savedUserImage = userImageService.saveUserImage(userImage);
        return ResponseEntity.ok(savedUserImage);
    }

    @GetMapping("/user_image/{id}")
    public ResponseEntity<User_Images> getUserImageById(@PathVariable String id) {
        User_Images userImage = userImageService.getUserImageById(id);
        return ResponseEntity.ok(userImage);
    }

    @DeleteMapping("/user_image/{id}")
    public ResponseEntity<Void> deleteUserImageById(@PathVariable String id) {
        userImageService.deleteUserImageById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/user_image/{id}")
    public ResponseEntity<User_Images> updateUserImage(@PathVariable String id, @RequestBody User_Images updatedUserImage) {
        User_Images existingUserImage = userImageService.getUserImageById(id);
        if (existingUserImage == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        existingUserImage.setData(updatedUserImage.getData()); // Update the image data

        User_Images updatedImage = userImageService.saveUserImage(existingUserImage);
        return new ResponseEntity<>(updatedImage, HttpStatus.OK);
    }
}

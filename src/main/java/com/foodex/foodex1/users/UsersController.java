package com.foodex.foodex1.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin("https://localhost/3000/")
public class UsersController {
    @Autowired
    private UsersRepository usersRepository;

    //To insert new user into users table
    @PostMapping("/user")
    Users newUser(@RequestBody Users newUser){
        return usersRepository.save(newUser);
    }

    //To display all the users in users table
    @GetMapping("/users")
    List<Users> getAllUsers(){
        return usersRepository.findAll();
    }

    //To find any user by its username
    //If User not exists then returns statement that it doesn't exist
    @GetMapping("/user/{username}")
    Users getUserById(@PathVariable String username){
        return usersRepository.findById(username)
                .orElseThrow(()->new UserNotFoundException(username));
    }

    //To update any user by its username
    //If User not exists then returns statement that it doesn't exist
//    @PutMapping("/user/{username}")
//    Users updateUser(@RequestBody Users newUser, @PathVariable String username){
//        return usersRepository.findById(username)
//                .map(user -> {
//                    user.setUsername(newUser.getUsername());
//                    user.setAddress(newUser.getAddress());
//                    user.setEmail(newUser.getEmail());
//                    user.setName(newUser.getName());
//                    user.setPassword(newUser.getPassword());
//                    user.setPhone(newUser.getPhone());
//
//                    return usersRepository.save(user);
//                })
//                .orElseThrow(()-> new UserNotFoundException(username));
//    }

    @PutMapping("/user/{username}")
    Users updateUser(@RequestBody Users newUser, @PathVariable String username){
        return usersRepository.findById(username)
                .map(user -> {
                    user.setAddress(newUser.getAddress());
                    user.setEmail(newUser.getEmail());
                    user.setName(newUser.getName());
                    user.setPassword(newUser.getPassword());
                    user.setPhone(newUser.getPhone());

                    return usersRepository.save(user);
                })
                .orElseThrow(()->new UserNotFoundException(username));
    }

    //To Delete any user by its username
    @DeleteMapping("/user/{username}")
    String deleteUser(@PathVariable String username){
        if(!usersRepository.existsById(username)){
            throw new UserNotFoundException(username);
        }

        usersRepository.deleteById(username);
        return "User with username = " + username + " has been deleted successfully!!!";
    }

}



package com.foodex.foodex1.users;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("https://localhost/3000/")
public class UsersController {
    @Autowired
    private UsersRepository usersRepository;

//    @Autowired
//    private PasswordEncoder passwordEncoder;

    @PostMapping("/user")
    Users newUser(@RequestBody Users newUser) {
//        String hashedPassword = passwordEncoder.encode(newUser.getPassword());
//        System.out.println(hashedPassword);
//        newUser.setPassword(hashedPassword);
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

//    @PutMapping("/user/{username}")
//    Users updateUser(@RequestBody Users newUser, @PathVariable String username) {
//        return usersRepository.findById(username)
//                .map(user -> {
//                    user.setAddress(newUser.getAddress());
//                    user.setEmail(newUser.getEmail());
//                    user.setName(newUser.getName());
//                    user.setPhone(newUser.getPhone());
//
//                    // Check if the password is updated
//                    if (!newUser.getPassword().equals(user.getPassword())) {
//                        String hashedPassword = passwordEncoder.encode(newUser.getPassword());
//                        user.setPassword(hashedPassword);
//                    }
//
//                    return usersRepository.save(user);
//                })
//                .orElseThrow(() -> new UserNotFoundException(username));
//    }

    //To Delete any user by its username
    @DeleteMapping("/user/{username}")
    String deleteUser(@PathVariable String username){
        if(!usersRepository.existsById(username)){
            throw new UserNotFoundException(username);
        }

        usersRepository.deleteById(username);
        return "User with username = " + username + " has been deleted successfully!!!";
    }

    @GetMapping("/user/email/{email}")
    Users getUserByEmail(@PathVariable String email) {
        return usersRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("Email: " + email));
    }
}



package com.foodex.foodex1.users;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String username){
        super("Could Not Find user with username = " + username);
    }
}

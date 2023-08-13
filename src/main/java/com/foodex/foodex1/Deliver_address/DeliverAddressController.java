package com.foodex.foodex1.Deliver_address;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DeliverAddressController {

    @Autowired
    private DeliverAddressRepository deliverAddressRepository;

    @GetMapping("/deliver_address/{username}")
    public DeliverAddress getUserByUsername(@PathVariable String username) {
        return deliverAddressRepository.findByUsers_Username(username);
    }
}

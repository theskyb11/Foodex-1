package com.foodex.foodex1.Deliver_address;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DeliverAddressRepository extends JpaRepository<DeliverAddress, Long> {
    DeliverAddress findByUsers_Username(String username);
}

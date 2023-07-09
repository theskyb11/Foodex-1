package com.foodex.foodex1.Deliver_address;

import com.foodex.foodex1.users.Users;
import jakarta.persistence.*;

@Entity
@Table(name = "Deliver_address")
public class Deliver_address {
    public Integer getDel_id() {
        return del_id;
    }

    public void setDel_id(Integer del_id) {
        this.del_id = del_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer del_id;
    private String name;
    private String address;

    @ManyToOne
    @JoinColumn(name = "username", referencedColumnName = "username",
            foreignKey = @ForeignKey(name = "deliver_address_ibfk_1"))
    private Users users;

    public Deliver_address() {
    }

    public Deliver_address(Integer del_id, String name, String address) {
        this.del_id = del_id;
        this.name = name;
        this.address = address;
    }
}

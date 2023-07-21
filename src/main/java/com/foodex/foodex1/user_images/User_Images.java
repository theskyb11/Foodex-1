package com.foodex.foodex1.user_images;

import com.foodex.foodex1.users.Users;
import jakarta.persistence.*;

@Entity
@Table(name = "user_images")
public class User_Images {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Lob
    @Column(name = "data", nullable = false, columnDefinition = "longblob")
    private byte[] data;

    @ManyToOne
    @JoinColumn(name = "username", referencedColumnName = "username",
            foreignKey = @ForeignKey(name = "fk_users_userimages"))
    private Users users;

    public User_Images() {
    }

    public User_Images(byte[] data, Users users) {
        this.data = data;
        this.users = users;
    }

    // Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }
}


package com.fullstack.foodex1.res_images;

import com.fullstack.foodex1.restaurants.Restaurants;
import jakarta.persistence.*;

@Entity
@Table(name = "res_images")
public class Res_images {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Lob
    @Column(nullable = false, columnDefinition="longblob")
    private byte[] data;
    @ManyToOne
    @JoinColumn(name = "res_id", referencedColumnName = "res_id", foreignKey = @ForeignKey(name = "fk_resimages_restaurants"))
    private Restaurants restaurants;

    public Res_images(int id, byte[] data, Restaurants restaurants) {
        this.id = id;
        this.data = data;
        this.restaurants = restaurants;
    }

    public Res_images() {
    }

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

    public Restaurants getRestaurants() {
        return restaurants;
    }

    public void setRestaurants(Restaurants restaurants) {
        this.restaurants = restaurants;
    }

}

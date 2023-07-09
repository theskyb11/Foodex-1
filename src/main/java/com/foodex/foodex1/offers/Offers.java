package com.foodex.foodex1.offers;

import com.foodex.foodex1.restaurants.Restaurants;
import jakarta.persistence.*;

@Entity
@Table(name = "Offers")
public class Offers {
    public Long getOffer_id() {
        return offer_id;
    }

    public void setOffer_id(Long offer_id) {
        this.offer_id = offer_id;
    }

    public String getOffer_name() {
        return offer_name;
    }

    public void setOffer_name(String offer_name) {
        this.offer_name = offer_name;
    }

    public Float getOffer_value() {
        return offer_value;
    }

    public void setOffer_value(Float offer_value) {
        this.offer_value = offer_value;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getOffer_code() {
        return offer_code;
    }

    public void setOffer_code(String offer_code) {
        this.offer_code = offer_code;
    }

    public Offers() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long offer_id;
    private String offer_name;
    private Float offer_value;
    private String description;
    private String offer_code;

    @ManyToOne
    @JoinColumn(name = "res_id", referencedColumnName = "res_id",
            foreignKey = @ForeignKey(name = "offers_ibfk_1"))
    private Restaurants restaurants;

    public Offers(Long offer_id, String offer_name, Float offer_value, String description, String offer_code) {
        this.offer_id = offer_id;
        this.offer_name = offer_name;
        this.offer_value = offer_value;
        this.description = description;
        this.offer_code = offer_code;
    }
}

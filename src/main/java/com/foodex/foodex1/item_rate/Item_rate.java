package com.foodex.foodex1.item_rate;

import com.foodex.foodex1.items.Items;
import com.foodex.foodex1.users.Users;
import jakarta.persistence.*;

@Entity
@Table(name = "item_rate",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"username", "item_id", "ratings"}),
                @UniqueConstraint(columnNames = {"item_id", "username"})
        })
public class Item_rate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private float ratings;
    @ManyToOne
    @JoinColumn(name = "item_id", referencedColumnName = "item_id", foreignKey = @ForeignKey(name = "fk_itemrates_items"))
    private Items items;
    @ManyToOne
    @JoinColumn(name = "username", referencedColumnName = "username", foreignKey = @ForeignKey(name = "fk_itemrates_users"))
    private Users users;

    public Item_rate(int id, float ratings, Items items, Users users) {
        this.id = id;
        this.ratings = ratings;
        this.items = items;
        this.users = users;
    }

    public Item_rate() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getRatings() {
        return ratings;
    }

    public void setRatings(float ratings) {
        this.ratings = ratings;
    }

    public Items getItems() {
        return items;
    }

    public void setItems(Items items) {
        this.items = items;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }
}

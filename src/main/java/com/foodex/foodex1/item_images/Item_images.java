package com.foodex.foodex1.item_images;

import com.foodex.foodex1.items.Items;
import jakarta.persistence.*;

@Entity
@Table(name = "item_images")
public class Item_images {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Lob
    @Column(nullable = false, columnDefinition="longblob")
    private byte[] data;
    @ManyToOne
    @JoinColumn(name = "item_id", referencedColumnName = "item_id", foreignKey = @ForeignKey(name = "fk_itemimages_items"))
    private Items items;

    public Item_images(int id, byte[] data, Items items) {
        this.id = id;
        this.data = data;
        this.items = items;
    }

    public Item_images() {
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

    public Items getItems() {
        return items;
    }

    public void setItems(Items items) {
        this.items = items;
    }

}

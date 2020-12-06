package com.cookystoriesspring.CookYStories.Scarpers.Models;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Document(collection = "Restaurants")
public class Restaurant {
    @Id
    private String id;
    private String name;
    private String address;
    private String telephone;
    private String website;
    private String price;

    public Restaurant() {
    }

    public Restaurant(String id, String name, String address, String telephone, String website, String price) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.telephone = telephone;
        this.website = website;
        this.price = price;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Restaurant{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", telephone='" + telephone + '\'' +
                ", website='" + website + '\'' +
                ", price='" + price + '\'' +
                '}';
    }


}

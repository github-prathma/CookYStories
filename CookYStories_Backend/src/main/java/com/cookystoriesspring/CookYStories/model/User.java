package com.cookystoriesspring.CookYStories.model;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import java.util.Objects;
import java.util.Optional;

@Document(collection = "Users")
public class User {

    @Id
    private String id;

    private String username;
    private String firstName;
    private String lastName;
    private Optional<String> bioDescription;
    private String password;
    private String email;
    private Optional<String> city;
    private Optional<String> country;

    public User() {
    }

    public User(String username, String firstName, String lastName, Optional<String> bioDescription, String password, String email, Optional<String> city, Optional<String> country) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bioDescription = bioDescription;
        this.password = password;
        this.email = email;
        this.city = city;
        this.country = country;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Optional<String> getBioDescription() {
        return bioDescription;
    }

    public void setBioDescription(Optional<String> bioDescription) {
        this.bioDescription = bioDescription;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Optional<String> getCity() {
        return city;
    }

    public void setCity(Optional<String> city) {
        this.city = city;
    }

    public Optional<String> getCountry() {
        return country;
    }

    public void setCountry(Optional<String> country) {
        this.country = country;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return (id.equals(user.id));
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", bioDescription='" + bioDescription + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", city='" + city + '\'' +
                ", country='" + country + '\'' +
                '}';
    }
}

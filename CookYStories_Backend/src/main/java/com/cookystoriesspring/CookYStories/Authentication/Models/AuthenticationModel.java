package com.cookystoriesspring.CookYStories.Authentication.Models;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Document(collection = "AuthData")
public class AuthenticationModel {
    @Id
    private String id;
    private String email;
    private String password;
    private String username;
    private String token;


    public AuthenticationModel() {
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public AuthenticationModel(String id, String email, String password, String username, String token) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.username = username;
        this.token = token;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

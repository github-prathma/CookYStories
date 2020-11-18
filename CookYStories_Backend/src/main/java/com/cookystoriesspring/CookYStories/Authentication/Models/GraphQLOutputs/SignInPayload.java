package com.cookystoriesspring.CookYStories.Authentication.Models.GraphQLOutputs;

public class SignInPayload {
    private String user;
    private String token;
    private String password;

    public SignInPayload() {
    }

    public SignInPayload(String user, String token, String password) {
        this.user = user;
        this.token = token;
        this.password = password;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}

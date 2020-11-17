package com.cookystoriesspring.CookYStories.Authentication.Models.GraphQLOutputs;

public class SignInPayload {
    private String user;
    private String token;

    public SignInPayload() {
    }

    public SignInPayload(String user, String token) {
        this.user = user;
        this.token = token;
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

package com.cookystoriesspring.CookYStories.Authentication.Models.GraphQLOutputs;

public class SignInPayload {
    private String user;
    private String token;
    private String password;
    private String profileImageUrl;

    public SignInPayload() {
    }

    public SignInPayload(String user, String token, String password, String profileImageUrl) {
        this.user = user;
        this.token = token;
        this.password = password;
        this.profileImageUrl = profileImageUrl;
    }

    public String getProfileImageUrl() {
        return profileImageUrl;
    }

    public void setProfileImageUrl(String profileImageUrl) {
        this.profileImageUrl = profileImageUrl;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
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

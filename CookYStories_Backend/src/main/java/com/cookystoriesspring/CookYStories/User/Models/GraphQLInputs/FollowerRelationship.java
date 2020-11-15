package com.cookystoriesspring.CookYStories.User.Models.GraphQLInputs;

public class FollowerRelationship {
    private String loggedInUser;
    private String toFollowUser;

    public String getLoggedInUser() {
        return loggedInUser;
    }

    public void setLoggedInUser(String loggedInUser) {
        this.loggedInUser = loggedInUser;
    }

    public String getToFollowUser() {
        return toFollowUser;
    }

    public void setActionOnUser(String toFollowUser) {
        this.toFollowUser = toFollowUser;
    }

    public FollowerRelationship() {
    }

    public FollowerRelationship(String loggedInUser, String toFollowUser) {
        this.loggedInUser = loggedInUser;
        this.toFollowUser = toFollowUser;
    }
}

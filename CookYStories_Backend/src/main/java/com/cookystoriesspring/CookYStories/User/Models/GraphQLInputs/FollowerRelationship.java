package com.cookystoriesspring.CookYStories.User.Models.GraphQLInputs;

public class FollowerRelationship {
    private String loggedInUser;
    private String toFollowUser;
    private Boolean isFollow;

    public FollowerRelationship() {
    }

    public FollowerRelationship(String loggedInUser, String toFollowUser, Boolean isFollow) {
        this.loggedInUser = loggedInUser;
        this.toFollowUser = toFollowUser;
        this.isFollow = isFollow;
    }

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

    public Boolean getIsFollow() {
        return isFollow;
    }

    public void setIsFollow(Boolean isFollow) {
        this.isFollow = isFollow;
    }
}

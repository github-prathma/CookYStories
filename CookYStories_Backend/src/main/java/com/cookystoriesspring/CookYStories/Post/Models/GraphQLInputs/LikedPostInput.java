package com.cookystoriesspring.CookYStories.Post.Models.GraphQLInputs;

public class LikedPostInput {

    //post id
    private String id;

    private Boolean isLike;

    //by username
    private String byUsername;

    public LikedPostInput() {

    }

    public LikedPostInput(String id, Boolean isLike, String byUsername) {
        this.id = id;
        this.isLike = isLike;
        this.byUsername = byUsername;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Boolean getIsLike() {
        return isLike;
    }

    public void setIsLike(Boolean liked) {
        isLike = liked;
    }

    public String getByUsername() {
        return byUsername;
    }

    public void setByUsername(String byUsername) {
        this.byUsername = byUsername;
    }
}

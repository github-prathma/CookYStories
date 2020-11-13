package com.cookystoriesspring.CookYStories.Post.Models.GraphQLInputs;

public class LikedPostInput {

    //post id
    private String id;

    private Boolean isLiked;

    //by username
    private String byUsername;

    public LikedPostInput() {

    }

    public LikedPostInput(String id, Boolean isLiked, String byUsername) {
        this.id = id;
        this.isLiked = isLiked;
        this.byUsername = byUsername;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Boolean getIsLiked() {
        return isLiked;
    }

    public void setIsLiked(Boolean liked) {
        isLiked = liked;
    }

    public String getByUsername() {
        return byUsername;
    }

    public void setByUsername(String byUsername) {
        this.byUsername = byUsername;
    }
}

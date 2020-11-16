package com.cookystoriesspring.CookYStories.Post.Models.GraphQLInputs;

public class CommentInput {

    String id;
    String description;
    String byUsername;
    String postId;

    public CommentInput() {

    }

    public CommentInput(String description, String byUsername, String postId) {
        this.description = description;
        this.byUsername = byUsername;
        this.postId = postId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getByUsername() {
        return byUsername;
    }

    public void setByUsername(String byUsername) {
        this.byUsername = byUsername;
    }

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}

package com.cookystoriesspring.CookYStories.Post.Models.GraphQLInputs;

public class MediaInput {

    String contentType;

    byte[] content;

    String postId;

    public MediaInput() {

    }

    public MediaInput(String type, byte[] content) {
        this.contentType = type;
        this.content = content;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String type) {
        this.contentType = type;
    }

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }
}

package com.cookystoriesspring.CookYStories.Post.Models.GraphQLInputs;

import com.cookystoriesspring.CookYStories.Post.Models.Media;

import java.util.List;

public class PostInput {

    private String id;
    private String description;
    private List<Media> media;
    private String byUsername;
    private String imageUrl;

    public PostInput() {
    }

    public PostInput(String description, List<Media> media, String byUsername, String imageUrl) {
        this.description = description;
        this.media = media;
        this.byUsername = byUsername;
        this.imageUrl = imageUrl;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Media> getMedia() {
        return media;
    }

    public void setMedia(List<Media> media) {
        this.media = media;
    }

    public String getByUsername() {
        return byUsername;
    }

    public void setByUsername(String byUsername) {
        this.byUsername = byUsername;
    }
}

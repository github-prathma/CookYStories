package com.cookystoriesspring.CookYStories.model.inputs;
import com.cookystoriesspring.CookYStories.model.Media;
import com.cookystoriesspring.CookYStories.model.User;

import java.util.List;

public class PostInput {

    private String id;
    private String description;
    private List<String> media;
    private String byUsername;

    public PostInput() {
    }

    public PostInput(String description, List<String> media, String byUsername) {
        this.description = description;
        this.media = media;
        this.byUsername = byUsername;
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

    public List<String> getMedia() {
        return media;
    }

    public void setMedia(List<String> media) {
        this.media = media;
    }

    public String getByUsername() {
        return byUsername;
    }

    public void setByUsername(String byUsername) {
        this.byUsername = byUsername;
    }
}

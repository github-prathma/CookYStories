package com.cookystoriesspring.CookYStories.model;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
import java.util.Objects;

@Document(collection = "Stories")
public class Story {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String storyId;
    private String imageUrl;
    private User byUser;
    private Date createdAt;

    public Story() {
    }

    public Story(String storyId, String imageUrl, User byUser, Date createdAt) {
        this.storyId = storyId;
        this.imageUrl = imageUrl;
        this.byUser = byUser;
        this.createdAt = createdAt;
    }

    public String getStoryId() {
        return storyId;
    }

    public void setStoryId(String storyId) {
        this.storyId = storyId;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public User getByUser() {
        return byUser;
    }

    public void setByUser(User byUser) {
        this.byUser = byUser;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Story story = (Story) o;
        return storyId.equals(story.storyId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(storyId);
    }

    @Override
    public String toString() {
        return "Story{" +
                "storyId='" + storyId + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", byUser=" + byUser +
                ", createdAt=" + createdAt +
                '}';
    }
}


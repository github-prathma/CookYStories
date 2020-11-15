package com.cookystoriesspring.CookYStories.Story.Models;

import com.cookystoriesspring.CookYStories.User.Models.User;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;
import java.util.Objects;

@Document(collection = "Stories")
public class Story {

    @Id
    private String id;
    private String imageUrl;
    private User byUser;
    private Date createdAt;

    public Story() {
    }

    public Story(String imageUrl, User byUser, Date createdAt) {
        this.imageUrl = imageUrl;
        this.byUser = byUser;
        this.createdAt = createdAt;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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
        return id.equals(story.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Story{" +
                "id='" + id + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", byUser=" + byUser +
                ", createdAt=" + createdAt +
                '}';
    }
}


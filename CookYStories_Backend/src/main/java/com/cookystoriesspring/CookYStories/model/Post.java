package com.cookystoriesspring.CookYStories.model;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Document(collection = "Posts")
public class Post {

    @Id
    private String id;
    private String description;
    private Date createdAt;
    private User byUser;
    private List<String> imagesUrl;
    private Integer numLikes;
    private Integer numComments;
    private String shareUrl;
    private List<Comment> comments;

    public Post() {
    }

    public Post(String description, Date createdAt, User byUser, List<String> imagesUrl, Integer numLikes, Integer numComments, String shareUrl, List<Comment> comments) {
        this.description = description;
        this.createdAt = createdAt;
        this.byUser = byUser;
        this.imagesUrl = imagesUrl;
        this.numLikes = numLikes;
        this.numComments = numComments;
        this.shareUrl = shareUrl;
        this.comments = comments;
    }

    public String getId() {
        return id;
    }

    public void setId(String postId) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public User getByUser() {
        return byUser;
    }

    public void setByUser(User byUser) {
        this.byUser = byUser;
    }

    public List<String> getImagesUrl() {
        return imagesUrl;
    }

    public void setImagesUrl(List<String> imagesUrl) {
        this.imagesUrl = imagesUrl;
    }

    public Integer getNumLikes() {
        return numLikes;
    }

    public void setNumLikes(Integer numLikes) {
        this.numLikes = numLikes;
    }

    public Integer getNumComments() {
        return numComments;
    }

    public void setNumComments(Integer numComments) {
        this.numComments = numComments;
    }

    public String getShareUrl() {
        return shareUrl;
    }

    public void setShareUrl(String shareUrl) {
        this.shareUrl = shareUrl;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return id.equals(post.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Post{" +
                "id='" + id + '\'' +
                ", description='" + description + '\'' +
                ", createdAt=" + createdAt +
                ", byUser=" + byUser +
                ", imagesUrl=" + imagesUrl +
                ", numLikes=" + numLikes +
                ", numComments=" + numComments +
                ", shareUrl='" + shareUrl + '\'' +
                ", comments=" + comments +
                '}';
    }
}

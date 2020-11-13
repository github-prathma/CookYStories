package com.cookystoriesspring.CookYStories.Post.Models;

import com.cookystoriesspring.CookYStories.User.Models.User;
import org.springframework.data.mongodb.core.mapping.Document;

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
    private List<Media> media;
    private Integer numLikes;
    private Integer numComments;
    private String shareUrl;
    private List<Comment> comments;
    private List<User> likedByUsers;

    public Post() {
    }

    public Post(String description, Date createdAt, User byUser, List<Media> media, Integer numLikes, Integer numComments, String shareUrl, List<Comment> comments, List<User> likedByUsers) {
        this.description = description;
        this.createdAt = createdAt;
        this.byUser = byUser;
        this.media = media;
        this.numLikes = numLikes;
        this.numComments = numComments;
        this.shareUrl = shareUrl;
        this.comments = comments;
        this.likedByUsers = likedByUsers;
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

    public List<Media> getMedia() {
        return media;
    }

    public void setMedia(List<Media> media) {
        this.media = media;
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

    public List<User> getLikedByUsers() {
        return likedByUsers;
    }

    public void setLikedByUsers(List<User> likedByUsers) {
        this.likedByUsers = likedByUsers;
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
                ", createdAt=" + createdAt + '\'' +
                ", byUser=" + byUser + '\'' +
                ", media=" + media + '\'' +
                ", numLikes=" + numLikes + '\'' +
                ", numComments=" + numComments + '\'' +
                ", shareUrl='" + shareUrl + '\'' +
                ", comments=" + comments + '\'' +
                ", likedByUsers=" + likedByUsers + '\'' +
                '}';
    }
}

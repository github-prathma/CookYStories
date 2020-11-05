package com.cookystoriesspring.CookYStories.model;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
import java.util.Objects;

@Document(collection = "Comments")
public class Comment {

    @Id
    private String id;
    private String postId;
    private String commentText;
    private User byUser;
    private Date createdAt;
    private Integer numLikes;

    public Comment() {
    }

    public Comment(String postId, String commentText, User byUser, Date createdAt, Integer numLikes) {
        this.postId = postId;
        this.commentText = commentText;
        this.byUser = byUser;
        this.createdAt = createdAt;
        this.numLikes = numLikes;
    }

    public String getId() {
        return id;
    }

    public void setId(String commentId) {
        this.id = id;
    }

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    public String getCommentText() {
        return commentText;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
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

    public Integer getNumLikes() {
        return numLikes;
    }

    public void setNumLikes(Integer numLikes) {
        this.numLikes = numLikes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Comment comment = (Comment) o;
        return id.equals(comment.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id='" + id + '\'' +
                ", postId='" + postId + '\'' +
                ", commentText='" + commentText + '\'' +
                ", byUser=" + byUser +
                ", createdAt=" + createdAt +
                ", numLikes=" + numLikes +
                '}';
    }
}

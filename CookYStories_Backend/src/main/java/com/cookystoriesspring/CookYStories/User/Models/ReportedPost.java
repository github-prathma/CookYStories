package com.cookystoriesspring.CookYStories.User.Models;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;
import java.util.Objects;

@Document(collection = "ReportedPosts")
public class ReportedPost {
    @Id
    private String id;
    private String postId;
    private String reportedBy;
    private Date reportedAt;

    public ReportedPost() {
    }

    public ReportedPost(String id, String postId, String reportedBy, Date reportedAt) {
        this.id = id;
        this.postId = postId;
        this.reportedBy = reportedBy;
        this.reportedAt = reportedAt;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    public String getReportedBy() {
        return reportedBy;
    }

    public void setReportedBy(String reportedBy) {
        this.reportedBy = reportedBy;
    }

    public Date getReportedAt() {
        return reportedAt;
    }

    public void setReportedAt(Date reportedAt) {
        this.reportedAt = reportedAt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ReportedPost that = (ReportedPost) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

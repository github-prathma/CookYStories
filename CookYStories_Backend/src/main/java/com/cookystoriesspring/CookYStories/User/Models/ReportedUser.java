package com.cookystoriesspring.CookYStories.User.Models;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;
import java.util.Objects;

@Document(collection = "ReportedUsers")
public class ReportedUser {

    @Id
    private String id;
    private String username;
    private String reportedBy;
    private Date reportedAt;

    public ReportedUser() {
    }

    public Date getReportedAt() {
        return reportedAt;
    }

    public void setReportedAt(Date reportedAt) {
        this.reportedAt = reportedAt;
    }

    public ReportedUser(String id, String username, String reportedBy, Date reportedAt) {
        this.id = id;
        this.username = username;
        this.reportedBy = reportedBy;
        this.reportedAt = reportedAt;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getReportedBy() {
        return reportedBy;
    }

    public void setReportedBy(String reportedBy) {
        this.reportedBy = reportedBy;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ReportedUser that = (ReportedUser) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

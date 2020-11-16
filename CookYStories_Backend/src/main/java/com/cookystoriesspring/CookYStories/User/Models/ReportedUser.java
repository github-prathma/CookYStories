package com.cookystoriesspring.CookYStories.User.Models;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Objects;

@Document(collection = "Posts")
public class ReportedUser {

    @Id
    String id;
    String username;

    public ReportedUser() {

    }
    public ReportedUser(String username) {
        this.username = username;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    @Override
    public String toString() {
        return "ReportedUser{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                '}';
    }
}

package com.cookystoriesspring.CookYStories.model;

import java.util.Objects;

public class ExploreContent {

    private String id;
    private String title;
    private String description;
    private String sourceUrl;
    private String sourceName;

    public ExploreContent() {
    }

    public ExploreContent(String title, String description, String sourceUrl, String sourceName) {
        this.title = title;
        this.description = description;
        this.sourceUrl = sourceUrl;
        this.sourceName = sourceName;
    }

    public String getId() {
        return id;
    }

    public void setId(String contentId) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSourceUrl() {
        return sourceUrl;
    }

    public void setSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
    }

    public String getSourceName() {
        return sourceName;
    }

    public void setSourceName(String sourceName) {
        this.sourceName = sourceName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ExploreContent that = (ExploreContent) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "ExploreContent{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", sourceUrl='" + sourceUrl + '\'' +
                ", sourceName='" + sourceName + '\'' +
                '}';
    }
}

package com.cookystoriesspring.CookYStories.model;

import java.util.Objects;

public class ExploreContent {

    private String contentId;
    private String title;
    private String description;
    private String sourceUrl;
    private String sourceName;

    public ExploreContent() {
    }

    public ExploreContent(String contentId, String title, String description, String sourceUrl, String sourceName) {
        this.contentId = contentId;
        this.title = title;
        this.description = description;
        this.sourceUrl = sourceUrl;
        this.sourceName = sourceName;
    }

    public String getContentId() {
        return contentId;
    }

    public void setContentId(String contentId) {
        this.contentId = contentId;
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
        return contentId.equals(that.contentId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(contentId);
    }

    @Override
    public String toString() {
        return "ExploreContent{" +
                "contentId='" + contentId + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", sourceUrl='" + sourceUrl + '\'' +
                ", sourceName='" + sourceName + '\'' +
                '}';
    }
}

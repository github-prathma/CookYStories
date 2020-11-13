package com.cookystoriesspring.CookYStories.Channel.Models;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Objects;

@Document(collection = "Channels")
public class Channel {

    @Id
    private String id;
    private String sourceUrl;
    private String videoUrl;
    private String sourceName;

    public Channel() {
    }

    public Channel(String sourceUrl, String videoUrl, String sourceName) {
        this.sourceUrl = sourceUrl;
        this.videoUrl = videoUrl;
        this.sourceName = sourceName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSourceUrl() {
        return sourceUrl;
    }

    public void setSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
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
        Channel channel = (Channel) o;
        return id.equals(channel.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Channel{" +
                "id='" + id + '\'' +
                ", sourceUrl='" + sourceUrl + '\'' +
                ", videoUrl='" + videoUrl + '\'' +
                ", sourceName='" + sourceName + '\'' +
                '}';
    }
}

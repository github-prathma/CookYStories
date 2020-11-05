package com.cookystoriesspring.CookYStories.model;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;

@Document(collection = "Channels")
public class Channel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String channelId;
    private String sourceUrl;
    private String videoUrl;
    private String sourceName;

    public Channel() {
    }

    public Channel(String channelId, String sourceUrl, String videoUrl, String sourceName) {
        this.channelId = channelId;
        this.sourceUrl = sourceUrl;
        this.videoUrl = videoUrl;
        this.sourceName = sourceName;
    }

    public String getChannelId() {
        return channelId;
    }

    public void setChannelId(String channelId) {
        this.channelId = channelId;
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
        return channelId.equals(channel.channelId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(channelId);
    }

    @Override
    public String toString() {
        return "Channel{" +
                "channelId='" + channelId + '\'' +
                ", sourceUrl='" + sourceUrl + '\'' +
                ", videoUrl='" + videoUrl + '\'' +
                ", sourceName='" + sourceName + '\'' +
                '}';
    }
}

package com.cookystoriesspring.CookYStories.Scarpers.Models;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.List;

@Document(collection="Channels")
public class Channel {

    @Id
    private String id;

    private String channelName;
    private List<Video> videos;
    private int numVideos;
    private String channelLink;

    public Channel() {
    }

    public Channel(String id, String channelName, List<Video> videos, int numVideos, String channelLink) {
        this.id = id;
        this.channelName = channelName;
        this.videos = videos;
        this.numVideos = numVideos;
        this.channelLink = channelLink;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getChannelName() {
        return channelName;
    }

    public void setChannelName(String channelName) {
        this.channelName = channelName;
    }

    public List<Video> getVideos() {
        return videos;
    }

    public void setVideos(List<Video> videos) {
        this.videos = videos;
    }

    public int getNumVideos() {
        return numVideos;
    }

    public void setNumVideos(int numVideos) {
        this.numVideos = numVideos;
    }

    public String getChannelLink() {
        return channelLink;
    }

    public void setChannelLink(String channelLink) {
        this.channelLink = channelLink;
    }

    @Override
    public String toString() {
        return "Channel{" +
                "id='" + id + '\'' +
                ", channelName='" + channelName + '\'' +
                ", videos=" + videos +
                ", numVideos=" + numVideos +
                ", channelLink='" + channelLink + '\'' +
                '}';
    }
}

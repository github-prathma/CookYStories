package com.cookystoriesspring.CookYStories.Scarpers.Models;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Collection;
import java.util.List;

@Document(collection = "Channels")
public class Channels {

    private String id;
    private String channel;
    private String views;
    private String title;
    private String age;
    private String link;
    private String time;
    private List<String> tags;

    public Channels() {
    }

    public Channels(String id, String channel, String views, String title, String age, String link, List<String> tags, String time) {
        this.id = id;
        this.channel = channel;
        this.views = views;
        this.title = title;
        this.age = age;
        this.link = link;
        this.tags = tags;
        this.time = time;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getChannel() {
        return channel;
    }

    public void setChannel(String channel) {
        this.channel = channel;
    }

    public String getViews() {
        return views;
    }

    public void setViews(String views) {
        this.views = views;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    @Override
    public String toString() {
        return "Channels{" +
                "id='" + id + '\'' +
                ", channel='" + channel + '\'' +
                ", views='" + views + '\'' +
                ", title='" + title + '\'' +
                ", age='" + age + '\'' +
                ", link='" + link + '\'' +
                ", tags='" + tags + '\'' +
                '}';
    }
}

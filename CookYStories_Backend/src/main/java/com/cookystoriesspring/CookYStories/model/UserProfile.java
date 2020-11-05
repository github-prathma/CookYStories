package com.cookystoriesspring.CookYStories.model;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.List;
import java.util.Objects;

@Document(collection = "Users")
public class UserProfile {
    @Id
    private String id;

    private String username;
    private User basicInfo;
    private Integer numFollowers;
    private Integer numFollowing;
    private Integer numPosts;
    private List<Post> posts;
    private List<Post> likedPosts;
    private List<Comment> likedComments;
    private List<User> followers;
    private List<User> following;
    private String storyId;
    private String profileImageUrl;

    public UserProfile() {
    }

    public UserProfile(String username, User basicInfo, Integer numFollowers, Integer numFollowing, Integer numPosts, List<Post> posts, List<Post> likedPosts, List<Comment> likedComments, List<User> followers, List<User> following, String storyId, String profileImageUrl) {
        this.username = username;
        this.basicInfo = basicInfo;
        this.numFollowers = numFollowers;
        this.numFollowing = numFollowing;
        this.numPosts = numPosts;
        this.posts = posts;
        this.likedPosts = likedPosts;
        this.likedComments = likedComments;
        this.followers = followers;
        this.following = following;
        this.storyId = storyId;
        this.profileImageUrl = profileImageUrl;
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

    public User getBasicInfo() {
        return basicInfo;
    }

    public void setBasicInfo(User basicInfo) {
        this.basicInfo = basicInfo;
    }

    public Integer getNumFollowers() {
        return numFollowers;
    }

    public void setNumFollowers(Integer numFollowers) {
        this.numFollowers = numFollowers;
    }

    public Integer getNumFollowing() {
        return numFollowing;
    }

    public void setNumFollowing(Integer numFollowing) {
        this.numFollowing = numFollowing;
    }

    public Integer getNumPosts() {
        return numPosts;
    }

    public void setNumPosts(Integer numPosts) {
        this.numPosts = numPosts;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }

    public List<Post> getLikedPosts() {
        return likedPosts;
    }

    public void setLikedPosts(List<Post> likedPosts) {
        this.likedPosts = likedPosts;
    }

    public List<Comment> getLikedComments() {
        return likedComments;
    }

    public void setLikedComments(List<Comment> likedComments) {
        this.likedComments = likedComments;
    }

    public List<User> getFollowers() {
        return followers;
    }

    public void setFollowers(List<User> followers) {
        this.followers = followers;
    }

    public List<User> getFollowing() {
        return following;
    }

    public void setFollowing(List<User> following) {
        this.following = following;
    }

    public String getStoryId() {
        return storyId;
    }

    public void setStoryId(String storyId) {
        this.storyId = storyId;
    }

    public String getProfileImageUrl() {
        return profileImageUrl;
    }

    public void setProfileImageUrl(String profileImageUrl) {
        this.profileImageUrl = profileImageUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserProfile that = (UserProfile) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "UserProfile{" +
                "id='" + id + '\'' +
                ", username=" + username +
                ", basicInfo=" + basicInfo +
                ", numFollowers=" + numFollowers +
                ", numFOllowing=" + numFollowing +
                ", numPosts=" + numPosts +
                ", posts=" + posts +
                ", likedPosts=" + likedPosts +
                ", likedComments=" + likedComments +
                ", followers=" + followers +
                ", following=" + following +
                ", storyId='" + storyId + '\'' +
                ", profileImageUrl='" + profileImageUrl + '\'' +
                '}';
    }
}

package com.cookystoriesspring.CookYStories.Scarpers.MongoRepositories;

import com.cookystoriesspring.CookYStories.Scarpers.Models.Video;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface VideoRepository extends MongoRepository<Video, String> {
    public List<Video> findAllByChannelEquals(String channel);

    public List<Video> findAllByTagsIn(List<String> tags);
}

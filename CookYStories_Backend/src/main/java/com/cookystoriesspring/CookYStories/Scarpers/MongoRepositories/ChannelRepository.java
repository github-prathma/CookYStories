package com.cookystoriesspring.CookYStories.Scarpers.MongoRepositories;

import com.cookystoriesspring.CookYStories.Scarpers.Models.Channels;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ChannelRepository extends MongoRepository<Channels, String> {
    public List<Channels> findAllByChannelEquals(String channel);

    public List<Channels> findAllByTagsIn(List<String> tags);
}

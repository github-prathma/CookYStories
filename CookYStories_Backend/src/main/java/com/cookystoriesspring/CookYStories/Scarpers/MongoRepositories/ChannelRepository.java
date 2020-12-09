package com.cookystoriesspring.CookYStories.Scarpers.MongoRepositories;

import com.cookystoriesspring.CookYStories.Scarpers.Models.Channel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ChannelRepository extends MongoRepository<Channel, String> {
    public Channel findChannelsByChannelNameEquals(String name);
}

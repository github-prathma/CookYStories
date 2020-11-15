package com.cookystoriesspring.CookYStories.Channel.MongoRepositories;
import com.cookystoriesspring.CookYStories.Channel.Models.Channel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public interface ChannelRepository extends MongoRepository<Channel, String> {

}

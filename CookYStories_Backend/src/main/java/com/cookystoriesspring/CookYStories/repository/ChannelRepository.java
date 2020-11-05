package com.cookystoriesspring.CookYStories.repository;
import com.cookystoriesspring.CookYStories.model.Channel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface ChannelRepository extends MongoRepository<Channel, String> {

}

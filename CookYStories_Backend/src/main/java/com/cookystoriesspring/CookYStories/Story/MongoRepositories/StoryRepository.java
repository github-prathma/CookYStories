package com.cookystoriesspring.CookYStories.Story.MongoRepositories;
import com.cookystoriesspring.CookYStories.Story.Models.Story;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public interface StoryRepository extends MongoRepository<Story, String> {

}

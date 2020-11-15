package com.cookystoriesspring.CookYStories.ExploreContent.MongoRepositories;
import com.cookystoriesspring.CookYStories.ExploreContent.Models.ExploreContent;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public interface ExploreContentRepository extends MongoRepository<ExploreContent, String> {

}

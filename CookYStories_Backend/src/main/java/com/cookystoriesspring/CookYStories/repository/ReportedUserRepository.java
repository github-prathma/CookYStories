package com.cookystoriesspring.CookYStories.repository;
import com.cookystoriesspring.CookYStories.model.ReportedUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public interface ReportedUserRepository extends MongoRepository<ReportedUser, String> {
}

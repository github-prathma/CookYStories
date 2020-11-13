package com.cookystoriesspring.CookYStories.User.MongoRepositories;
import com.cookystoriesspring.CookYStories.User.Models.ReportedUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public interface ReportedUserRepository extends MongoRepository<ReportedUser, String> {
}

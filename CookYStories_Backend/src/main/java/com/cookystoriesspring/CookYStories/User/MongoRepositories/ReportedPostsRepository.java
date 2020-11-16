package com.cookystoriesspring.CookYStories.User.MongoRepositories;

import com.cookystoriesspring.CookYStories.User.Models.ReportedPost;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;

@Service
public interface ReportedPostsRepository extends MongoRepository<ReportedPost, String> {
    @Query( value = "{ 'postId' : ?0, 'reportedBy' : ?1 }", fields = "{ 'postId' : 0 , 'reportedAt':2}")
    ReportedPost findReportedPostByPostIdAndReportedBy(String postId, String reportedBy);
}

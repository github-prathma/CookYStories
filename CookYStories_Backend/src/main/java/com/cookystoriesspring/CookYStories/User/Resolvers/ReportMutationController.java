package com.cookystoriesspring.CookYStories.User.Resolvers;

import com.cookystoriesspring.CookYStories.Post.Models.Post;
import com.cookystoriesspring.CookYStories.Post.MongoRepositories.PostRepository;
import com.cookystoriesspring.CookYStories.User.Models.GraphQLInputs.ReportPostInput;
import com.cookystoriesspring.CookYStories.User.Models.GraphQLInputs.ReportUserInput;
import com.cookystoriesspring.CookYStories.User.Models.ReportedPost;
import com.cookystoriesspring.CookYStories.User.Models.ReportedUser;
import com.cookystoriesspring.CookYStories.User.Models.User;
import com.cookystoriesspring.CookYStories.User.MongoRepositories.ReportedPostsRepository;
import com.cookystoriesspring.CookYStories.User.MongoRepositories.ReportedUserRepository;
import com.cookystoriesspring.CookYStories.User.MongoRepositories.UserRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class ReportMutationController implements GraphQLMutationResolver {

    @Autowired
    ReportedUserRepository reportedUserRepository;

    @Autowired
    ReportedPostsRepository reportedPostsRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PostRepository postRepository;

    private Boolean isReportUserValid(ReportUserInput reportUserInput) {
        if(reportUserInput.getUsername()==null || reportUserInput.getReportedBy()==null) {
            return false;
        } else {
            if(reportUserInput.getUsername() == null || reportUserInput.getUsername().equals(reportUserInput.getReportedBy())) {
                return false;
            }
            return true;
        }
    }

    private Boolean isReportPostValid(ReportPostInput reportPostInput) {
        if(reportPostInput.getPostId()==null || reportPostInput.getReportedBy()==null) {
            return false;
        } else {
            Post retrievedPost = postRepository.findPostById(reportPostInput.getPostId());
            if(retrievedPost == null || retrievedPost.getByUser().getUsername().equals(reportPostInput.getReportedBy())) {
                return false;
            }
            return true;
        }

    }

    public String reportUser(ReportUserInput reportInput) {

        if(isReportUserValid(reportInput)) {
            ReportedUser reportedUser = new ReportedUser();
            reportedUser.setUsername(reportInput.getUsername());
            reportedUser.setReportedBy(reportInput.getReportedBy());
            reportedUser.setReportedAt(new Date());
            reportedUserRepository.save(reportedUser);

            return "Request for report User " + reportInput.getUsername() + " is in progress. Thank You!";
        }
        return "Sorry could not report User "+reportInput.getUsername();
    }

    public String reportPost(ReportPostInput reportPostInput) {

        if(isReportPostValid(reportPostInput)) {
            ReportedPost reportedPost = new ReportedPost();
            reportedPost.setPostId(reportPostInput.getPostId());
            reportedPost.setReportedBy(reportPostInput.getReportedBy());
            reportedPost.setReportedAt(new Date());
            reportedPostsRepository.save(reportedPost);

            return "Request to report Post " + reportPostInput.getPostId() + " is in progress. Thank You!";
        }
        return "Sorry could not report Post "+ reportPostInput.getPostId();
    }
}

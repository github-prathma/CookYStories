package com.cookystoriesspring.CookYStories.Post.Resolvers;

import com.cookystoriesspring.CookYStories.Post.Models.Post;
import com.cookystoriesspring.CookYStories.Post.MongoRepositories.PostRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PostsGraphQLQueryController implements GraphQLQueryResolver {

    @Autowired
    private PostRepository postRepository;

    public Post getPost(String id) {
        return postRepository.findById(id).get();
    }
}

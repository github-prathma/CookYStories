package com.cookystoriesspring.CookYStories.controller;

import com.cookystoriesspring.CookYStories.model.Post;
import com.cookystoriesspring.CookYStories.repository.PostRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PostsGraphQLQueryController implements GraphQLQueryResolver {

    @Autowired
    private PostRepository postRepository;

    public Post getPost(String id) {
        return postRepository.findById(id).get();
    }
}

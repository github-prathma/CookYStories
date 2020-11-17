package com.cookystoriesspring.CookYStories.Authentication.Resolvers;

import com.cookystoriesspring.CookYStories.Authentication.Models.GraphQLOutputs.SignInPayload;
import com.cookystoriesspring.CookYStories.Authentication.MongoRepositories.AuthenticationRepository;
import com.cookystoriesspring.CookYStories.User.Models.User;
import com.coxautodev.graphql.tools.GraphQLResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class LoginResolver implements GraphQLResolver<SignInPayload> {
    public String user(SignInPayload payload) {
        return payload.getUser();
    }
}

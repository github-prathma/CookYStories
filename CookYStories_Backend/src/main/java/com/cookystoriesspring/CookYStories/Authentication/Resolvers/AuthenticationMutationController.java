package com.cookystoriesspring.CookYStories.Authentication.Resolvers;

import com.cookystoriesspring.CookYStories.Authentication.Models.AuthenticationModel;
import com.cookystoriesspring.CookYStories.Authentication.Models.GraphQLOutputs.SignInPayload;
import com.cookystoriesspring.CookYStories.Authentication.MongoRepositories.AuthenticationRepository;
import com.cookystoriesspring.CookYStories.User.Models.User;
import com.cookystoriesspring.CookYStories.User.MongoRepositories.UserRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationMutationController implements GraphQLMutationResolver {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationRepository authenticationRepository;

    public SignInPayload login(AuthenticationModel auth) throws IllegalAccessException {
        User fetchedUser = userRepository.findByUsername(auth.getUsername());
        if(fetchedUser.getPassword().equals(auth.getPassword())) {
            SignInPayload payload = new SignInPayload(fetchedUser.getUsername(), fetchedUser.getId());
            AuthenticationModel authUser = new AuthenticationModel();
            authUser.setPassword(auth.getPassword());
            authUser.setUsername(auth.getUsername());
            authUser.setToken(payload.getToken());
            authUser.setEmail(fetchedUser.getEmail());

            authenticationRepository.save(authUser);
            return payload;
        }
        throw new IllegalAccessException("Invalid Credentials");
    }

    public Boolean logout(String username) {
        AuthenticationModel loggedInUser = authenticationRepository.findByUsername(username);
        if(loggedInUser == null) {
            // User is not logged In... So no need to log out
            return false;
        } else {
            authenticationRepository.delete(loggedInUser);
            return true;
        }
    }
}

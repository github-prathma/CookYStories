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
        AuthenticationModel existingLogin = authenticationRepository.findByUsername(auth.getUsername());
        if(existingLogin==null) {
            User fetchedUser = userRepository.findByUsername(auth.getUsername());

            if(fetchedUser.getPassword().equals(auth.getPassword())) {

                SignInPayload payload = new SignInPayload(fetchedUser.getUsername(), fetchedUser.getId(), auth.getPassword());
                AuthenticationModel authUser = new AuthenticationModel();
                authUser.setPassword(auth.getPassword());
                authUser.setUsername(auth.getUsername());
                authUser.setToken(payload.getToken());
                authUser.setEmail(fetchedUser.getEmail());

                authenticationRepository.save(authUser);
                return payload;
            } else {
                throw new IllegalAccessException("Invalid Credentials");
            }
        } else {
            AuthenticationModel a = authenticationRepository.findByUsername(auth.getUsername());
            return new SignInPayload(a.getUsername(),a.getId(),a.getPassword());
        }

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

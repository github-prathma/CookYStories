package com.cookystoriesspring.CookYStories.Post.Resolvers;

import com.cookystoriesspring.CookYStories.Post.Models.GraphQLInputs.MediaInput;
import com.cookystoriesspring.CookYStories.Post.Models.Media;
import com.cookystoriesspring.CookYStories.Post.MongoRepositories.MediaRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class UploadFileGraphQLMutationController implements GraphQLMutationResolver {

    @Autowired
    private MediaRepository mediaRepository;

    public Boolean uploadFile(MediaInput file) {

        Media newMedia = new Media();

        String fileContentType = file.getContentType();
        newMedia.setType(fileContentType);

        byte[] fileContent = file.getContent();
        newMedia.setContent(fileContent);

        mediaRepository.insert(newMedia);

        return true;
    }
}

package com.cookystoriesspring.CookYStories.Scarpers.Resolvers;

import com.cookystoriesspring.CookYStories.Scarpers.Models.Channel;
import com.cookystoriesspring.CookYStories.Scarpers.MongoRepositories.ChannelRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Component
@CrossOrigin(origins = "http://localhost:3000")
public class ChannelsGraphQLQueryResolver implements GraphQLQueryResolver {

    @Autowired
    private ChannelRepository channelRepository;

    public List<Channel> getChannel(String channel) {
        return channelRepository.findAllByChannelEquals(channel);
    }

    public List<Channel> getAllChannels() {
        return channelRepository.findAll();
    }

    public List<Channel> getChannelByTags(List<String> tags) {
        return channelRepository.findAllByTagsIn(tags);
    }
}

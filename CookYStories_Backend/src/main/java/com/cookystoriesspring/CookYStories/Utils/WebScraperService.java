package com.cookystoriesspring.CookYStories.Utils;

import org.springframework.stereotype.Service;


public interface WebScraperService {
    public String loadRestaurants();
    public String loadChannels(String searchQuery);
}

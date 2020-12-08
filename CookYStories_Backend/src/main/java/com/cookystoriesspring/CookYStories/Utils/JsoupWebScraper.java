//package com.cookystoriesspring.CookYStories.Utils;
//
//import lombok.extern.slf4j.Slf4j;
//import org.jsoup.Jsoup;
//import org.jsoup.nodes.Document;
//import org.jsoup.nodes.Element;
//import org.jsoup.select.Elements;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//@Slf4j
//@RestController
//public class JsoupWebScraper {
//    Logger log = LoggerFactory.getLogger(JsoupWebScraper.class);
//
//    @Autowired
//    WebScraperService webScraperService;
//
//    @GetMapping("/scrapeRestaurants")
//    public String ScrapeRestaurantData() {
//        return webScraperService.loadRestaurants();
//
//    }
//
//    @GetMapping("/loadChannels/{searchQuery}")
//    public String ScrapeChannelData(@PathVariable String searchQuery) {
//        return  webScraperService.loadNearBy(searchQuery);
//    }
//}

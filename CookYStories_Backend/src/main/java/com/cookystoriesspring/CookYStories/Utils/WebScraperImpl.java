//package com.cookystoriesspring.CookYStories.Utils;
//
//import com.cookystoriesspring.CookYStories.Scarpers.Models.Channel;
//import com.cookystoriesspring.CookYStories.Scarpers.Models.Video;
//import com.cookystoriesspring.CookYStories.Scarpers.Models.Restaurant;
//import com.cookystoriesspring.CookYStories.Scarpers.MongoRepositories.ChannelRepository;
//import com.cookystoriesspring.CookYStories.Scarpers.MongoRepositories.VideoRepository;
//import com.cookystoriesspring.CookYStories.Scarpers.MongoRepositories.RestaurantRepository;
//
//import lombok.extern.slf4j.Slf4j;
//import org.jsoup.Jsoup;
//import org.jsoup.nodes.Document;
//import org.jsoup.nodes.Element;
//import org.jsoup.select.Elements;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.support.ui.WebDriverWait;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//
//
//@Slf4j
//@Service
//public class WebScraperImpl implements WebScraperService{
//
//    Logger log = LoggerFactory.getLogger(WebScraperService.class);
//    @Autowired
//    private RestaurantRepository restaurantRepository;
//
//    @Autowired
//    private VideoRepository videoRepository;
//
//    @Autowired
//    private ChannelRepository channelRepository;
//
//    @Autowired
//    private ChromeDriver driver;
//
//    @Override
//    public String loadRestaurants() {
//        String baseUrl = "https://www.cntraveller.com/gallery/best-new-restaurants-world";
//                // generic structuring -> "http://time.com/94414/best-restaurants-world/";
//        try {
//            Document doc = Jsoup.connect(baseUrl).get();
//
//            String result = "";
//            Elements body = doc.select("ul.a-gallery__image-list");
//            for(Element bigE : body.select("figcaption")) {
////            System.out.println(e.text());
//
//                result += bigE.text();
//                result += "\n";
//                String name = bigE.select("h3").text();
//                String address, telephone, website, price;
//                String cluttered = bigE.select("div.bb-callout__body").select("p:nth-of-type(1)").text();
//                // Filter required attributes from cluttered string
//
//                Restaurant res = new Restaurant();
//                res.setName(name);
//                if(cluttered.contains("Price: ")) {
//                    int index = cluttered.indexOf("Price: ");
//                    price = cluttered.substring(index+7, cluttered.length());
//                    res.setPrice(price);
//                    cluttered = cluttered.substring(0, index);
//                }
//                if(cluttered.contains("Website: ")) {
//                    int index = cluttered.indexOf("Website: ");
//                    website = cluttered.substring(index+9, cluttered.length());
//                    res.setWebsite(website);
//                    cluttered = cluttered.substring(0, index);
//                }
//                if(cluttered.contains("Telephone: ")) {
//                    int index = cluttered.indexOf("Telephone: ");
//                    telephone = cluttered.substring(index+11, cluttered.length());
//                    res.setTelephone(telephone);
//                    cluttered = cluttered.substring(0, index);
//                }
//                if(cluttered.contains("Address: ")) {
//                    int index = cluttered.indexOf("Address: ");
//                    address = cluttered.substring(index+9, cluttered.length());
//                    res.setAddress(address);
//                    cluttered = cluttered.substring(0, index);
//                }
//                restaurantRepository.save(res);
//
//            }
//            return result;
//        } catch (Exception e){
//            return e.getMessage();
//        }
//
//    }
//
//    @Override
//    public String loadChannels(String searchQuery) {
//        List<String> tags = new ArrayList(Arrays.asList(searchQuery.split(" ")));
//        log.info(tags.toString());
//        String youtubeBaseUrl = "http://www.youtube.com/results?search_query=";
//        String gsearchUrl = "https://www.google.com/search?q=";
//        String videoFormatExtension = "&tbm=vid";
//        youtubeBaseUrl += searchQuery.replaceAll(" ","+");
//        gsearchUrl += searchQuery.replaceAll(" ","+")+videoFormatExtension;
//        log.info("Searching webpage: "+youtubeBaseUrl);
//        try {
//
//            WebDriverWait wait = new WebDriverWait(driver, 30);
//
//            driver.get(youtubeBaseUrl);
//
//            final WebElement videoList = driver.findElementByTagName("ytd-item-section-renderer");
//
//            final List<WebElement> list = videoList.findElements(By.tagName("ytd-video-renderer"));
//
////            Document doc = Jsoup.connect(youtubeBaseUrl)
////                    .timeout(20000)
////                    .get();
//
//            String channel = "";
//            String views = "";
//            String title = "";
//            String age = "";
//            String link = "";
//            String time = "";
//            String thumbnailUrl = "";
//            String result = "";
//            String channelLink = "";
//
////            Elements bigE;
////            bigE = doc.select("div#search");
//
////            bigE = doc.select("div#content");
////            log.info("Found: "+ bigE.text());
//
////            for(Element e : bigE.select("div.rc")) {
////                String joinedTitle = e.select("h3").text();
////                log.info(joinedTitle);
////                if(joinedTitle.contains("|")) {
////                    title = joinedTitle.split("\\|")[0];
////                    channel = joinedTitle.split("\\|")[1];
////                } else if (joinedTitle.contains("-")) {
////                    title = joinedTitle.split("\\-")[0];
////                    channel = joinedTitle.split("\\-")[1];
////                }
////                age = e.select("div.fG8Fp").text();
////                if(age.contains("·")) {
////                    age = age.split("· ")[0];
////                }
////                link = e.select("a").attr("href");
////
////                result += title+"<br>  "+views+" "+age+" "+channel+" "+link+" <br>\n\n";
////
////                Channels channelObj = new Channels();
////                channelObj.setAge(age);
////                channelObj.setChannel(channel);
////                channelObj.setLink(link);
////                channelObj.setTitle(title);
////                channelObj.setTags(tags);
////
////                channelRepository.save(channelObj);
////
////            }
//
//            for (WebElement e : list) {
//                e.findElement(By.tagName("ytd-thumbnail"));
////                time = e.findElement(By.xpath("//div[@id='overlays']/ytd-thumbnail-overlay-time-status-renderer/span")).getText();
//                WebElement meta = e.findElement(By.xpath(".//*[@id=\"meta\"]"));
//                WebElement channelInfo = e.findElement(By.xpath(".//*[@id=\"channel-info\"]"));
//
//                link = e.findElement(By.xpath(".//*[@id=\"thumbnail\"]")).getAttribute("href");
//                title = meta.findElement(By.xpath(".//*[@id=\"video-title\"]")).getText();
//                age = meta.findElement(By.xpath(".//*[@id=\"metadata-line\"]/span[2]")).getText();
//                views = meta.findElement(By.xpath(".//*[@id=\"metadata-line\"]/span[1]")).getText();
//                channel = channelInfo.findElement(By.xpath(".//*[@id=\"text\"]/a")).getText();
//                thumbnailUrl = e.findElement(By.xpath("//*[@id=\"img\"]")).getAttribute("src");
//
//                log.info(thumbnailUrl);
//                Video videoObj = new Video();
//                videoObj.setAge(age);
//                videoObj.setChannel(channel);
//                videoObj.setLink(link);
//                videoObj.setTitle(title);
//                videoObj.setTags(tags);
//                videoObj.setViews(views);
//                videoObj.setThumbnailUrl(thumbnailUrl);
//
//                videoRepository.save(videoObj);
//                result+=e.getText()+"<br><br>";
//
//                Channel existing = channelRepository.findChannelsByChannelNameEquals(channel);
//                if (existing == null) {
//                    Channel createdChannel = new Channel();
//                    createdChannel.setChannelName(channel);
//                    createdChannel.setNumVideos(1);
//                    List<Video> videos = new ArrayList<>();
//                    videos.add(videoObj);
//                    createdChannel.setVideos(videos);
//                    channelLink = channelInfo.findElement(By.xpath("//*[@id=\"channel-info\"]/a")).getAttribute("href");
//                    log.info(channelLink);
//
//                    createdChannel.setChannelLink(channelLink);
//
//                    channelRepository.save(createdChannel);
//                } else {
//                    List<Video> videos = existing.getVideos();
//                    videos.add(videoObj);
//                    existing.setNumVideos(existing.getNumVideos()+1);
//
//                    channelRepository.save(existing);
//                }
//            }
//            return result;
//
//        } catch (Exception e) {
//            return e.getMessage();
//        }
//
//    }
//}

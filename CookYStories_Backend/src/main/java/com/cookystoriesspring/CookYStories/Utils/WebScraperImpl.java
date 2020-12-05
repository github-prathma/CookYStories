package com.cookystoriesspring.CookYStories.Utils;

import com.cookystoriesspring.CookYStories.Scarpers.Models.Restaurant;
import com.cookystoriesspring.CookYStories.Scarpers.MongoRepositories.RestaurantRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WebScraperImpl implements WebScraperService{

    @Autowired
    private RestaurantRepository restaurantRepository;
    @Override
    public String loadRestaurants() {
        String baseUrl = "https://www.cntraveller.com/gallery/best-new-restaurants-world";
                // generic structuring -> "http://time.com/94414/best-restaurants-world/";
        try {
            Document doc = Jsoup.connect(baseUrl).get();

            String result = "";
            Elements body = doc.select("ul.a-gallery__image-list");
            for(Element bigE : body.select("figcaption")) {
//            System.out.println(e.text());

                result += bigE.text();
                result += "\n";
                String name = bigE.select("h3").text();
                String address, telephone, website, price;
                String cluttered = bigE.select("div.bb-callout__body").select("p:nth-of-type(1)").text();
                // Filter required attributes from cluttered string

                Restaurant res = new Restaurant();
                res.setName(name);
                if(cluttered.contains("Price: ")) {
                    int index = cluttered.indexOf("Price: ");
                    price = cluttered.substring(index+7, cluttered.length());
                    res.setPrice(price);
                    cluttered = cluttered.substring(0, index);
                }
                if(cluttered.contains("Website: ")) {
                    int index = cluttered.indexOf("Website: ");
                    website = cluttered.substring(index+9, cluttered.length());
                    res.setWebsite(website);
                    cluttered = cluttered.substring(0, index);
                }
                if(cluttered.contains("Telephone: ")) {
                    int index = cluttered.indexOf("Telephone: ");
                    telephone = cluttered.substring(index+11, cluttered.length());
                    res.setTelephone(telephone);
                    cluttered = cluttered.substring(0, index);
                }
                if(cluttered.contains("Address: ")) {
                    int index = cluttered.indexOf("Address: ");
                    address = cluttered.substring(index+9, cluttered.length());
                    res.setAddress(address);
                    cluttered = cluttered.substring(0, index);
                }
                restaurantRepository.save(res);
//                for(Element e : bigE.select("div.bb-callout__body")) {
//                    String address = e.select("p:nth-of-type(1)").text();
//                    String telephone = e.select("p:nth-of-type(2)").text();
//                    String website = e.select("p:nth-of-type(3)").text();
//                    String price = e.select("p:nth-of-type(4)").text();
//
//                    Restaurant res = new Restaurant();
//                    res.setAddress(address);
//                    res.setName(name);
//                    res.setPrice(price);
//                    res.setWebsite(website);
//                    res.setTelephone(telephone);
//
//                    restaurantRepository.save(res);
//                }
            }
            return result;
        } catch (Exception e){
            return e.getMessage();
        }

    }

    @Override
    public void loadNearBy() {

    }
}

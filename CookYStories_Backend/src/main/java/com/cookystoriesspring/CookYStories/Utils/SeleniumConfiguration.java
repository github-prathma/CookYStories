//
//package com.cookystoriesspring.CookYStories.Utils;
//
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import javax.annotation.PostConstruct;
//
//
//@Configuration
//public class SeleniumConfiguration {
//
//    public static final String AWS_CHROMEDRIVER_PATH = "/home/ec2-user/PROJECT/chromedriver";
//    public static final String DEV_CHROMEDRIVER_PATH = "/Users/prathma/Documents/OOD_PROJECT/chromedriver";
//
//    @PostConstruct
//    public void postConstruct() {
//        System.setProperty("webdriver.chrome.driver", AWS_CHROMEDRIVER_PATH);
//    }
//
//    @Bean
//    public ChromeDriver driver() {
//        return new ChromeDriver();
//    }
//}

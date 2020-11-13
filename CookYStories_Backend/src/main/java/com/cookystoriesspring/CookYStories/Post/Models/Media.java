package com.cookystoriesspring.CookYStories.Post.Models;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

@Document(collection = "Media")
public class Media {

    @Id
    String id;

    // Image, Gif, Video
    String type;

//    List<Byte> imagesBinary;
//
//    public Media() {
//
//    }

//    public Media(String type, List<Byte> imageBinary) {
//        this.type = type;
//        this.imagesBinary = imageBinary;
//    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

//    public List<Byte> getImagesBinary() {
//        return imagesBinary;
//    }
//
//    public void setImagesBinary(List<Byte> imagesBinary) {
//        this.imagesBinary = imagesBinary;
//    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Media media = (Media) o;
        return id.equals(media.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Media{" +
                "id='" + id + '\'' +
                ", type='" + type + '\'' +
//                ", imagesBinary=" + imagesBinary +
                '}';
    }
}

package com.cookystoriesspring.CookYStories.Utils;

import graphql.schema.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.servlet.http.Part;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;


@Configuration
public class MediaScalar {

    @Bean
    public GraphQLScalarType mediaBinaryScalar() {
        return new GraphQLScalarType("ByteArray", "Media binary content for upload", new Coercing<byte[], Void>() {
            @Override
            public Void serialize(Object o) throws CoercingSerializeException {
                throw new CoercingSerializeException("Upload is an input only type");
            }

            @Override
            public byte[] parseValue(Object input) throws CoercingParseValueException {
                if (input != null) {
                    ByteArrayOutputStream bos = new ByteArrayOutputStream();
                    ObjectOutputStream out = null;
                    try {
                        try {
                            out = new ObjectOutputStream(bos);
                            out.writeObject(input);
                            out.flush();
                        } catch (IOException e) {
                            throw new CoercingParseValueException("Couldn't read content of the uploaded file");
                        }

                        byte[] yourBytes = bos.toByteArray();
                        return yourBytes;

                    } finally {
                        try {
                            bos.close();
                        } catch (IOException ex) {
                            throw new CoercingParseValueException("Couldn't read content of the uploaded file");
                        }
                    }
                } else {
                    throw new CoercingParseValueException("Invalid class");

                }

                /*if (input instanceof Part) {
                    Part part = (Part) input;
                    try {
                        String contentType = part.getContentType();
                        byte[] content = new byte[part.getInputStream().available()];
                        part.delete();
                        return new Media(contentType, content);

                    } catch (IOException e) {
                        throw new CoercingParseValueException("Couldn't read content of the uploaded file");
                    }
                } else if (null == input) {
                    return null;
                } else {
                    throw new CoercingParseValueException(
                            "Expected type " + Part.class.getName() + " but was " + input.getClass().getName());
                }*/
            }

            @Override
            public byte[] parseLiteral(Object o) throws CoercingParseLiteralException {
                throw new CoercingParseLiteralException(
                        "Must use variables to specify Upload values");
            }
        });
    }

   /* public static final GraphQLScalarType Media = new GraphQLScalarType(
            "Media",
            "File uploading in multipart request",
            new Coercing<Media, Void>() {
                @Override
                public Void serialize(Object o) throws CoercingSerializeException {
                    throw new CoercingSerializeException("Upload is an input only type");
                }

                @Override
                public Media parseValue(Object input) throws CoercingParseValueException {
                    if (input instanceof Part) {
                        Part part = (Part) input;
                        try {
                            String contentType = part.getContentType();
                            byte[] content = new byte[part.getInputStream().available()];
                            part.delete();
                            return new Media(contentType, content);

                        } catch (IOException e) {
                            throw new CoercingParseValueException("Couldn't read content of the uploaded file");
                        }
                    } else if (null == input) {
                        return null;
                    } else {
                        throw new CoercingParseValueException(
                                "Expected type " + Part.class.getName() + " but was " + input.getClass().getName());
                    }
                }

                @Override
                public Media parseLiteral(Object o) throws CoercingParseLiteralException {
                    throw new CoercingParseLiteralException(
                            "Must use variables to specify Upload values");

                }
            }

    );*/
}

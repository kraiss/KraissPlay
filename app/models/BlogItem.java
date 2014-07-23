package models;

import com.google.code.morphia.annotations.Entity;
import org.bson.types.ObjectId;

import javax.persistence.Id;
/**
 * Created by rassat on 23/07/2014.
 */
@Entity
public class BlogItem {

    @Id
    public ObjectId id;

    public String titleFr;
    public String titleEn;

    public String textFr;
    public String testEn;

    public String sourceCode;
    public String image;

    public BlogItem() {};
}

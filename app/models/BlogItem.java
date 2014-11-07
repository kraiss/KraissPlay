package models;

import com.google.code.morphia.annotations.Entity;
import com.google.code.morphia.annotations.Id;
import org.bson.types.ObjectId;

/**
 * Created by rassat on 23/07/2014.
 */
@Entity("blogarticle")
public class BlogItem {

    @Id
    public ObjectId id;

    public String titleFr;
    public String titleEn;

    public String textFr;
    public String textEn;

    public String image;

    public BlogItem() {};

    public BlogItem(String image, String titleFr, String titleEn, String textFr, String textEn) {
        this.image = image;
        this.titleFr = titleFr;
        this.titleEn = titleEn;
        this.textFr = textFr;
        this.textEn = textEn;
    }
}

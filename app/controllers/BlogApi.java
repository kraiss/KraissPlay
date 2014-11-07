package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import models.*;
import com.google.gson.*;
import services.MorphiaObject;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by rassat on 23/07/2014.
 */
public class BlogApi extends Controller {
    public static Result getBlogArticles() {
        Gson gson = new Gson();

        List<BlogItem> items = new ArrayList<BlogItem>();
        items = MorphiaObject.datastore.find(BlogItem.class).asList();

        return ok(gson.toJson(items));
    }
}

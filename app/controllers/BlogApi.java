package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import play.libs.Json;

/**
 * Created by rassat on 23/07/2014.
 */
public class BlogApi extends Controller {
    public static Result getBlogArticles() {
            return ok();

        //return ok(Json.toJson(...));
    }
}

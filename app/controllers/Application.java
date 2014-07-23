package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import play.api.i18n.Lang;
import play.data.Form;

public class Application extends Controller {

    public static Result index() {
        return homepage();
    }
    
    public static Result homepage() {
        return ok(views.html.homepage.render("homepage"));
    }
    
    public static Result error() {
        return ok(views.html.error.render("error"));
    }
    
    public static Result jlog() {
        return ok(views.html.notebook.render("jlog"));
    }
    
    public static Result contact() {
        return ok(views.html.contact.render("contact"));
    }
    
    public static Result ogame() {
        return ok(views.html.ogame.render("ogame"));
    }
}

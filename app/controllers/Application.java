package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import play.api.i18n.Lang;

public class Application extends Controller {
    private final static String DEFAULT_LANG="fr";
    
    public static Result index() {
        String lang = getLanguage();
        return ok(views.html.homepage.render("homepage", lang));
    }
    
    public static Result homepage(String lang) {
        lang = setLanguage(lang);
        return ok(views.html.homepage.render("homepage", lang));
    }
    
    public static Result error(String lang) {
        lang = setLanguage(lang);
        return ok(views.html.error.render("error", lang));
    }
    
    public static Result notebook(String lang) {
        lang = setLanguage(lang);
        return ok(views.html.notebook.render("notebook", lang));
    }
    
    public static Result contact(String lang) {
        lang = setLanguage(lang);
        return ok(views.html.contact.render("contact", lang));
    }
    
    private static String setLanguage(String lang) {
        
        return lang;
    }
    
    private static String getLanguage() {
        
        return DEFAULT_LANG;
    }
}

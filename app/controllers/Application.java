package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import play.api.i18n.Lang;
import play.data.Form;

public class Application extends Controller {
    private final static String DEFAULT_LANG="fr";
    private final static String LANG_FR="fr";
    private final static String LANG_EN="en";
    private final static String LANG_ATTR="language";
    
    public static Result index() {
        return ok(views.html.homepage.render("homepage"));
    }
    
    public static Result homepage() {
        return ok(views.html.homepage.render("homepage"));
    }
    
    public static Result error() {
        return ok(views.html.error.render("error"));
    }
    
    public static Result notebook() {
        return ok(views.html.notebook.render("notebook"));
    }
    
    public static Result contact() {
        return ok(views.html.contact.render("contact"));
    }
    
    public static Result ogame() {
        return ok(views.html.contact.render("ogame"));
    }
    
    public static Result switchLang() {
        if (LANG_FR.equals(session(LANG_ATTR))){
            session(LANG_ATTR, LANG_EN);
        } else {
            session(LANG_ATTR, LANG_FR);
        }
        
        changeLang(session(LANG_ATTR));
        
        return ok(session(LANG_ATTR));
    }
    
    public static Result getLang() {
        if (session(LANG_ATTR) == null || session(LANG_ATTR).isEmpty())
            session(LANG_ATTR, LANG_FR);
            
        //play.Logger.debug("Get : Session Lang is "+ session(LANG_ATTR));
        
        return ok(session(LANG_ATTR));
    }
}

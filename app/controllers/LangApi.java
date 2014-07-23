package controllers;

import play.mvc.Controller;
import play.mvc.Result;

/**
 * Created by rassat on 23/07/2014.
 */
public class LangApi extends Controller {
    private final static String DEFAULT_LANG="fr";
    private final static String LANG_FR="fr";
    private final static String LANG_EN="en";
    private final static String LANG_ATTR="language";

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

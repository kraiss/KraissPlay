import com.google.code.morphia.Morphia;
import com.mongodb.Mongo;
import play.api.mvc.RequestHeader;
import play.api.mvc.SimpleResult;
import play.libs.F.Promise;
import play.*;
import play.mvc.*;
import play.mvc.Http.*;
import play.libs.F.*;
import services.MorphiaObject;
import play.Logger;
import java.net.UnknownHostException;

public class Global extends play.GlobalSettings {
/*
    public Promise<SimpleResult> onHandlerNotFound(RequestHeader request) {
        return Promise.<SimpleResult>pure(notFound(
                views.html.notFoundPage.render("error")
        ));
    }
*/
    @Override
    public void onStart(play.Application arg0) {
        super.beforeStart(arg0);
        Logger.debug("** onStart **");

        int port = 53479;
        String url = "ds053479.mongolab.com";
        String db = "heroku_app25530398";
        String password = "KraissPlay";
        String username = "KraissPlay";

        try {
            MorphiaObject.mongo = new Mongo(url, port);
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }

        MorphiaObject.morphia = new Morphia();
        MorphiaObject.datastore = MorphiaObject.morphia.createDatastore(MorphiaObject.mongo, db, username, password.toCharArray());
        MorphiaObject.datastore.ensureIndexes();
        MorphiaObject.datastore.ensureCaps();

        Logger.debug("** Morphia datastore: " + MorphiaObject.datastore.getDB());
    }
}
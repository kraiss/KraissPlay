package services;

import com.google.code.morphia.Datastore;
import com.google.code.morphia.Morphia;
import com.google.code.morphia.annotations.Entity;
import com.mongodb.Mongo;

/**
 * Created by yuzel on 03/03/14.
 */
public class MorphiaObject {
    static public Mongo mongo;
    static public Morphia morphia;
    static public Datastore datastore;
}

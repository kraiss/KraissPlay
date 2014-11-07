name := "KraissPlay"

version := "1.0-SNAPSHOT"

resolvers += Resolver.url("SBT Plugin Releases", url("http://repo.scala-sbt.org/scalasbt/sbt-plugin-releases/"))(Resolver.ivyStylePatterns)

resolvers += "Maven repository" at "http://morphia.googlecode.com/svn/mavenrepo/"

resolvers += "MongoDb Java Driver Repository" at "http://repo1.maven.org/maven2/org/mongodb/mongo-java-driver/"

libraryDependencies ++= Seq(
  javaJdbc,
  javaEbean,
  cache,
  "com.google.code.morphia" % "morphia" % "0.99",
  "org.mongodb" % "mongo-java-driver" % "2.7.3",
  "com.google.code.morphia" % "morphia-logging-slf4j" % "0.99",
  "org.webjars" %% "webjars-play" % "2.2.0",
  "com.google.code.gson" % "gson" % "2.2",
  "org.webjars" % "bootstrap" % "2.3.1")

play.Project.playJavaSettings

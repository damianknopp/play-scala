name := """play-scala"""

version := "1.0-SNAPSHOT"

//addSbtPlugin("com.typesafe.sbt" % "sbt-coffeescript" % "1.9.0")
//addSbtPlugin("com.typesafe.sbteclipse" % "sbteclipse-plugin" % "2.1.0-RC1")

lazy val root = (project in file(".")).enablePlugins(PlayScala).enablePlugins(SbtWeb)

scalaVersion := "2.11.1"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache,
  ws,
  filters,
 "org.webjars" %% "webjars-play" % "2.3.0-2",
 "org.webjars" % "coffee-script" % "1.9.0",
 "org.webjars" % "bootstrap" % "3.3.2",
 "org.webjars" % "requirejs" % "2.1.15",
 "org.webjars" % "requirejs-text" % "2.0.10-3",
 "org.webjars" % "backbonejs" % "1.1.2-4",
 "org.webjars" % "underscorejs" % "1.7.0-1",
 "org.webjars" % "angularjs" % "1.3.14",
 "org.jasypt" % "jasypt" % "1.9.2",
 "org.jsoup" % "jsoup" % "1.8.1"
)

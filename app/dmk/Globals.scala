package dmk

import org.slf4j.LoggerFactory
import play.api.libs.concurrent.Execution.Implicits._
import play.api.libs.concurrent.Akka
import play.api.Play.current
import scala.concurrent.duration.DurationInt

object Globals {
  val logger = LoggerFactory.getLogger(Globals.getClass)
  var userName: String = null
  var password: String = null
  var portalUrl: String = null
  
  
  Akka.system.scheduler.schedule(0.microseconds, 24.hours) {
    logger.info("scheduled task " + System.nanoTime())
  }
}
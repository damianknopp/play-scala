package dmk

import javax.net.ssl._
import play.core.ApplicationProvider
import play.server.api._

/**
 * Turn on client certificate authenticate to require
 */
class CustomSSLEngineProvider(appProvider: ApplicationProvider) extends SSLEngineProvider {
  override def createSSLEngine(): SSLEngine = {
    val sslEngine = SSLContext.getDefault.createSSLEngine
    sslEngine.setNeedClientAuth(false)
    sslEngine
  }
}
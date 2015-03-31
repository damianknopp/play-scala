package dmk

import javax.net.ssl.SSLContext
import javax.net.ssl.SSLEngine
import play.core.ApplicationProvider
import play.server.api.SSLEngineProvider

/**
 * Turn on client certificate authenticate to require
 */
class CustomSSLEngineProvider(appProvider: ApplicationProvider) extends SSLEngineProvider {
  
  override def createSSLEngine(): SSLEngine = {
	  val clientAuth = true
    
    System.out.println(appProvider)
    System.out.println("overriding SSLContext and setting client auth = " + clientAuth)

    val sslEngine = SSLContext.getDefault.createSSLEngine
    sslEngine.setNeedClientAuth(clientAuth)
    sslEngine
  }
}
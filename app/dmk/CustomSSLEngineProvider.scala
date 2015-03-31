package dmk

import javax.net.ssl._
import play.core.ApplicationProvider
import play.server.api._
import java.security.Provider
import java.security.Security
import org.bouncycastle.jce.provider.BouncyCastleProvider

/**
 * Turn on client certificate authenticate to require
 */
class CustomSSLEngineProvider(appProvider: ApplicationProvider) extends SSLEngineProvider {
  
  override def createSSLEngine(): SSLEngine = {
	  val clientAuth = true
    
    System.out.println(appProvider)
    System.out.println("overriding SSLContext and setting client auth = " + clientAuth)

    val provider: Provider = new BouncyCastleProvider()
    Security.addProvider(provider)
//    val sslEngine = SSLContext.getInstance(provider.getName()).createSSLEngine
    val sslEngine = SSLContext.getDefault.createSSLEngine
    sslEngine.setNeedClientAuth(clientAuth)
    sslEngine
  }
}
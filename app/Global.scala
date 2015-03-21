
import org.jasypt.encryption.pbe.StandardPBEStringEncryptor
import org.jasypt.encryption.pbe.config.EnvironmentStringPBEConfig
import org.jasypt.properties.EncryptableProperties
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import play.api.Application
import play.api.mvc.WithFilters
import play.filters.gzip.GzipFilter
import play.filters.headers.SecurityHeadersFilter
import dmk.Globals

object Global extends WithFilters(
    new GzipFilter(shouldGzip = (request, response) =>
  response.headers.get("Content-Type").exists(_.startsWith("text/html"))),
    new SecurityHeadersFilter()
) {
  
  val logger: Logger = LoggerFactory.getLogger(Global.getClass)
  
  override def onStart(app: Application): Unit = {
    logger.info("Application is started!!!")
    
    val properties: EncryptableProperties = Global.encryptableProperties()
    val userName = properties.getProperty("dmk.service.portal.login.portalUser")
    val pass = properties.getProperty("dmk.service.portal.login.portalPass")
    val portalUrl = properties.getProperty("dmk.service.portal.login.portalUrl")
    Globals.userName = userName
    Globals.password = pass
    Globals.portalUrl = portalUrl
    logger.info("userName " + userName)
    logger.info("pass XXXX")
  }

  val location = "dmk-app.properties"
  
  def encryptableProperties(): EncryptableProperties = {
    val property : EncryptableProperties = new EncryptableProperties(configurationEncryptor())
    var inputStream = getClass().getResourceAsStream(location)
    if(inputStream == null){
      inputStream = Global.getClass.getResourceAsStream(location)
    }
    logger.info(inputStream.toString())
    try{
    	property.load(inputStream)
    }finally{
      if(inputStream != null){
        inputStream.close()
      }
    }
    property
  }

  def configurationEncryptor(): StandardPBEStringEncryptor = {
    val standardPBEStringEncryptor: StandardPBEStringEncryptor = new StandardPBEStringEncryptor()
    standardPBEStringEncryptor.setConfig(environmentStringPBEConfig())
    standardPBEStringEncryptor
  }
    
  def environmentStringPBEConfig(): EnvironmentStringPBEConfig = {
    val tmp =  new EnvironmentStringPBEConfig()
    tmp.setAlgorithm("PBEWithMD5AndDES")
    val envName = "DMK_APPLICATION_ENCRYPTION_PASSWORD"
    var pass = scala.util.Properties.envOrElse(envName, "dmk-salt")
    logger.info("salt pass " + pass)    
    tmp.setPasswordCharArray(pass.toCharArray())
    System.setProperty(envName, "")
    pass = null
    tmp
  }  

}
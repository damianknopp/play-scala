package controllers

import org.jsoup.nodes.Element
import org.jsoup.select.Elements
import org.slf4j.LoggerFactory
import play.api._
import play.api.Play.current
import play.api.cache.Cached
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.ws._
import play.api.mvc._
import org.jsoup.Jsoup
import dmk.Globals
import play.api.libs.json.Json
import models.UserStatus

object Application extends Controller {
  val logger = LoggerFactory.getLogger(Application.getClass)
  
  def index = Action {
    Ok(views.html.index("Login Status"))
  }
  
  def statusDetails(loginId: String) = Action {
    val json = statusList
    logger.info(json.toString())
    Ok("statusDetails")
  }
  
  def statusList = Cached.status(_ => "allStatus", 200) { 
    Action.async {
      val user = Globals.userName
      val password = Globals.password
      val url = Globals.portalUrl
      val holder: WSRequestHolder = 
        WS.url(url)
        .withFollowRedirects(true)
        .withAuth(user, password, WSAuthScheme.BASIC)
        
      holder.get().map { resp =>
        val root = Jsoup.parse(resp.body)
        val nameOpts: Elements = root.select("select[id=usernameSelect] > option")
        val itr = nameOpts.listIterator()
        var users = List[UserStatus]()
        while(itr.hasNext()){
          val el = itr.next()
          val login = el.attr("value")
          val name = el.text()
          val checkedin = !name.contains("x ")
          val user = UserStatus(login, name, checkedin)
          logger.trace(user.toString())
          users = user :: users
        }
        users = users.sortBy { x => x.login }
        Ok(Json.toJson(users))
      }
    }
  }

}
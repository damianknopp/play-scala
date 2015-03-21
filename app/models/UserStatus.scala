package models

import play.api.libs.json.Json

/**
 * @author dmknopp
 */


case class UserStatus(val login: String, val name: String, val checkedin: Boolean)

object UserStatus{
  implicit val personFmt = Json.format[UserStatus]
}


//implicit val userStatusWrites = new Writes[UserStatus] {
//  def writes(user: UserStatus) = Json.obj(
//    "login" -> user.login,
//    "name" -> user.name,
//    "status" -> user.status
//  )
//}

//val user: Reads[UserStatus] = (
//  (JsPath \ "login").read[String]() and
//  (JsPath \ "name").read[String]() and
//  (JsPath \ "status").read[Boolean]()
//)(UserStatus.apply _)

//implicit val user: Format[UserStatus] = (
//  (JsPath \ "login").format[String]() and
//  (JsPath \ "name").format[String]() and
//  (JsPath \ "status").read[Boolean]()
//)(UserStatus.apply, unlift(UserStatus.unapply))
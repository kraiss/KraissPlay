import play.api.GlobalSettings
import play.api.mvc.{SimpleResult, RequestHeader}
import play.api.mvc.Results.NotFound

import scala.concurrent.Future

object Global extends GlobalSettings {
  override def onHandlerNotFound(request: RequestHeader): Future[SimpleResult] = {
    Future.successful(NotFound(
      views.html.error.render("error"))
    )
  }
}

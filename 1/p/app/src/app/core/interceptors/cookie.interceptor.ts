import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CookieInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const xsrfToken = this.getCookie("XSRF-TOKEN");

        if(xsrfToken) {
            req = req.clone({
                headers: req.headers
                    .set("x-xsrf-token", xsrfToken)
            });
        }

        return next.handle(req);
    }

    public getCookie(value: string): string {
      return document.cookie.split(";").filter(item => {
        const splittedToken = item.split("=");

        if(splittedToken[0].trim() === value) return true;
        return false;
      })[0].split("=")[1];
    }
}

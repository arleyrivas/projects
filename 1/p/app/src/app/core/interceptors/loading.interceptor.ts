import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { finalize, Observable } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";
import { Store } from "@ngrx/store";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  public requests: number = 0;

  constructor(private readonly ngxSpinnerService: NgxSpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.ngxSpinnerService.show();
      this.requests = this.requests + 1;

      return next.handle(req).pipe(
          finalize(() => {
            if(this.requests) {
              this.requests = this.requests - 1;

              if(!this.requests) this.ngxSpinnerService.hide();
            }
          })
      );
  }
}

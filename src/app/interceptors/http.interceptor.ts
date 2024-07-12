import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { Observable, finalize, tap } from 'rxjs';

// export const httpInterceptor: HttpInterceptorFn = (req, next) => {
//   const loaderService = inject(LoaderService);
//   loaderService.show();
//   return next(req).pipe(
//     finalize(() => loaderService.hide())
//   );
// };

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    return next.handle(req).pipe(
      tap({
        next: (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.loaderService.hide();
          }
        },
        error: (error: HttpErrorResponse) => {
          this.loaderService.hide();
        }
      }),
      finalize(() => 
      {
        setTimeout(() => {
          this.loaderService.hide()
        }, 10000);
      }
      )
    );
  }
}

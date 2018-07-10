import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';


@Injectable()
export class MarvelInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        const newRequest = request.clone({
            url: `https://gateway.marvel.com/${request.url}`,
            params: request.params.set('apikey', 'your key here')
        });

        console.log(request.url, request.url === '/comics');

        if (request.url === 'v1/public/comics') {
            return next.handle(newRequest).delay(10000);
        }

        return next.handle(newRequest);


        // if (request.url.startsWith('marvel')) {
        //     const newRequestM = request.clone({
        //         url: `https://gateway.marvel.com/${request.url.replace('/marvel', '')}`,
        //         params: request.params.set('apikey', 'your key here')
        //     });
        //     return next.handle(newRequestM);
        // } ovo je za hendlovanje ako imamo vise get poziva na razlicite url-e
    }
}

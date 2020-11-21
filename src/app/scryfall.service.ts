import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IScryfallResponse } from './shared/model/scryfall-response.model';

@Injectable({ providedIn: 'root' })
export class ScryfallService {
  constructor(private httpClient: HttpClient) {}

  url = 'https://api.scryfall.com';

  exact(nombreCarta: string): Observable<IScryfallResponse> {
    const params = {
      exact: nombreCarta,
    };
    //
    const response: Observable<IScryfallResponse> = this.httpClient.get<IScryfallResponse>(
      //Estoy usando Template Literals http://es6-features.org/#StringInterpolation
      `${this.url}/cards/named`,
      //Estoy usando property shorthand http://es6-features.org/#PropertyShorthand
      { params }
    );
    //response es un objeto de tipo HttpResponse https://angular.io/api/common/http/HttpResponse
    return response;
  }

  //TODO
  //Devolver lista de cartas
  fuzzy(nombreCarta: string) {
    const params = {
      q: nombreCarta,
    };
    const response: Observable<IScryfallResponse> = this.httpClient.get<IScryfallResponse>(
      // Estoy usando Template Literals http://es6-features.org/#StringInterpolation
      `${this.url}/cards/search`,
      // Estoy usando property shorthand http://es6-features.org/#PropertyShorthand
      { params }
    );
    // response es un objeto de tipo HttpResponse https://angular.io/api/common/http/HttpResponse
    return response;
  }
}

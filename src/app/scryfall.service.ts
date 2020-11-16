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
    const response = this.httpClient.get<IScryfallResponse>(
      `${this.url}/cards/named`,
      { params }
      //observe : '';
    );
    //response es un objeto de tipo HttpResponse https://angular.io/api/common/http/HttpResponse
    return response;
  }

  //TODO
  //Devolver lista de cartas

  fuzzy(nombreCarta: string) {
    throw new Error('Metodo sin implementar');
  }
}

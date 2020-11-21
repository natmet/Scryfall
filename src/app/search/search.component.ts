import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScryfallService } from '../scryfall.service';
import { IScryfallResponse } from '../shared/model/scryfall-response.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  busqueda: string;
  urlImagen: string;
  urlImagenes: string[];

  constructor(private scryfallService: ScryfallService) {}

  ngOnInit(): void {}
  // traer mas datos y listarlos
  buscar(): void {
    this.scryfallService.exact(this.busqueda).subscribe(
      // Estoy usando arrow functions http://es6-features.org/#ExpressionBodies
      (res: IScryfallResponse) => {
        this.urlImagen = res.image_uris.normal;
      },
      (error) => {
        console.error('Ocurrio un error');
      }
    );
  }

  buscarFuzzy(): void {
    this.scryfallService.fuzzy(this.busqueda).subscribe(
      // Estoy usando arrow functions http://es6-features.org/#ExpressionBodies
      (res: IScryfallResponse) => {
        this.urlImagenes = res.data.map((carta) => carta.image_uris.normal);
      },
      (error) => {
        console.error('Ocurrio un error');
      }
    );
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  term: string = undefined;

  constructor( private route: ActivatedRoute,
               private prodService: ProductosService ) {

    route.params.subscribe(parametros => {

      this.term = parametros.term;

      // console.log(this.term);
      prodService.search_products(this.term);


    });

  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {

  product: any = undefined;
  id: string = '';

  constructor( private route: ActivatedRoute,
               private prodService: ProductosService ) {

    route.params.subscribe( parametros => {

      // console.log( parametros );
      // console.log( parametros.id );

      prodService.load_product( parametros.id )
        .subscribe( res => {
          this.product = res.json();
          this.id = parametros.id;
          // console.log(this.product);
          // console.log(this.id);
        });

    });

  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  loading_products: boolean = true;

  constructor( private http: Http ) {
    this.load_products();
  }

  public load_products() {

    this.loading_products = true;

    if ( this.productos.length === 0 ) {
      this.http.get('https://portfoliosirgaden.firebaseio.com/productos_idx.json')
      .subscribe( data => {
        // console.log(data.json());
        setTimeout(() => {
          this.productos = data.json();
          this.loading_products = false;
        }, 1500);
      });
    }
  }

}

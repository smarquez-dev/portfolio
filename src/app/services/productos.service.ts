import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  loading_products: boolean = true;
  // product: any;

  constructor( private http: Http ) {
    this.load_products();
    // this.load_product('prod-1');
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

  public load_product( id: string ) {

    return this.http.get(`https://portfoliosirgaden.firebaseio.com/productos/${id}.json`);

    // this.http.get(`https://portfoliosirgaden.firebaseio.com/productos/${id}.json`)
    // .subscribe( data => {
    //   this.product = data.json();
    //   console.log(this.product);
    // });

  }

}

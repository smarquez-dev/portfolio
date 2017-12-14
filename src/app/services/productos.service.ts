import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  productos_filtrados: any[] = [];
  loading_products: boolean = true;
  // product: any;

  constructor( private http: Http ) {
    this.load_products();
    // this.load_product('prod-1');
  }

  public search_products(term: string) {

    // console.log('Buscando producto...');
    // console.log(this.productos.length);

    if(this.productos.length === 0) {
      this.load_products().then( () => {
        // ha terminado la carga
        this.product_filter(term);
      });
    } else {
      this.product_filter(term);
    }


  }

  private product_filter(term: string) {

    this.productos_filtrados = [];

    term = term.toLowerCase();

    this.productos.forEach( product => {

      if (product.categoria.indexOf(term) >= 0 || product.titulo.toLowerCase().indexOf(term) >= 0) {
        this.productos_filtrados.push( product );
      }

      // console.log(this.productos_filtrados);
    });

  }

  public load_products() {

    this.loading_products = true;

    let promise = new Promise( ( resolve, reject ) => {

      this.http.get('https://portfoliosirgaden.firebaseio.com/productos_idx.json')
        .subscribe(data => {
          // console.log(data.json());
          // setTimeout(() => {
            this.productos = data.json();
            this.loading_products = false;
            resolve();
          // }, 1500);
        });

    });

    return promise;

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

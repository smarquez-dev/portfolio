import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformationService {

  infoData: any = {};
  equipo: any[] = [];
  cargada_info: boolean = false;
  cargada_about: boolean = false;

  constructor( public http: Http) {
    this.get_info();
    this.get_about_us();
  }

  public get_info() {

    this.http.get('assets/data/info.page.json')
      .subscribe(data => {
        // console.log(data.json());
        this.cargada_info = true;
        this.infoData = data.json();
      });

  }

  public get_about_us() {

    this.http.get('https://portfoliosirgaden.firebaseio.com/team.json')
      .subscribe(data => {
        console.log(data.json());
        this.cargada_about = true;
        this.equipo = data.json();
      });

  }

}

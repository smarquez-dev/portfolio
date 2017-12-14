import { Component } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public infoService: InformationService,
              private router: Router ) {}

  search_product(term: string) {

    // console.log(term);
    this.router.navigate(['search', term]);

  }

}

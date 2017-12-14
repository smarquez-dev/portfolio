import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  PortfolioComponent,
  ItemComponent,
  SearchComponent
} from './components/index.paginas';

const app_routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'search/:term', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });

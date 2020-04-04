import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidGlobalComponent } from './covid-global/covid-global.component';
import { CovidAllCountriesComponent } from './covid-all-countries/covid-all-countries.component';
import { CovidByCountryComponent } from './covid-by-country/covid-by-country.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //{ path: '', component: CovidGlobalComponent},
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: CovidGlobalComponent},
  { path: 'covid-all-countries', component: CovidAllCountriesComponent},
  { path: 'covid-by-country', component: CovidByCountryComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [CovidGlobalComponent,CovidAllCountriesComponent,CovidByCountryComponent,PageNotFoundComponent];

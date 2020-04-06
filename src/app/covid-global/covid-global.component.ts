import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-covid-global',
  templateUrl: './covid-global.component.html',
  styleUrls: ['./covid-global.component.css']
})
export class CovidGlobalComponent implements OnInit {

  globalStats = null;
  globalStatsError = null;
  userLocation = null;
  userCountryName = null;
  userCountryCode = null;
  userFlagURL = null;
  userCountryDataURL = null;

  constructor ( private _dataProviderService: DataProviderService /*, private _router: Router*/) {}

  ngOnInit(): void {

    // Get Global statistics
    this._dataProviderService.getStatsGlobal().subscribe(
      (response => {
        console.log(response);
        this.globalStats = response;
      }),
      (error => {
        console.log("Error response received!");
        console.log(error);
        this.globalStatsError = error;
      })
    );

    // Get User's location information
    this._dataProviderService.getLocationFromIP().subscribe(
      (response => {
        console.log(response);

        // Extract data
        this.userLocation = response;
        this.userCountryCode = response.countryCode;
        this.userCountryName = response.country;

        // Prepare flag URL
        this.userFlagURL = "https://www.countryflags.io/" + this.userCountryCode + "/flat/32.png"

        // Prepare country URL
        //this.userCountryDataURL = "https://corona.lmao.ninja/countries/" + this.userCountryName.toLowerCase();
        this.userCountryDataURL = "/covid-by-country?country=" + this.userCountryName.toLowerCase();
      }),
      (error => {
        console.log("Error response received!");
        console.log(error);
      })
    );

  } //ngOnInit()

  /*
  getDataByCountry() {
    this._router.navigate(['/covid-by-country',{country: this.userCountryName}]);
  }
  */

} // Class CovidGlobalComponent

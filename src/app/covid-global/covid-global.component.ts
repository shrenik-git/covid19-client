import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-covid-global',
  templateUrl: './covid-global.component.html',
  styleUrls: ['./covid-global.component.css']
})
export class CovidGlobalComponent implements OnInit {

  globalStats = null;
  globalStatsError = null;
  userLocation = null;
  userFlagURL = null;

  constructor ( private _dataProviderService: DataProviderService) {}

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
        this.userLocation = response;
        this.userFlagURL = "https://www.countryflags.io/" + response.countryCode + "/flat/32.png"
      }),
      (error => {
        console.log("Error response received!");
        console.log(error);
      })
    );

    //this.getGMTDate();
  }

  getGMTDate() :string {
    return Date.now().toString();
  }

}

import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-covid-all-countries',
  templateUrl: './covid-all-countries.component.html',
  styleUrls: ['./covid-all-countries.component.css']
})
export class CovidAllCountriesComponent implements OnInit {

  allCountryStats = {};
  allCountryStatsError = null;

  constructor(private _dataProviderService: DataProviderService) { }

  ngOnInit(): void {
    // Get all country statistics
    this._dataProviderService.getStatsByCountries().subscribe(
      (response => {
        console.log(response);
        this.allCountryStats = response;
        this.allCountryStats;
      }),
      (error => {
        console.log("Error response received!");
        console.log(error);
        this.allCountryStatsError = error;
        this.allCountryStats = null;
      })
    );
  }

}

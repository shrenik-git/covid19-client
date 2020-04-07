import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
//import { CountrySelectComponent } from '../country-select/country-select.component';

@Component({
  selector: 'app-covid-by-country',
  templateUrl: './covid-by-country.component.html',
  styleUrls: ['./covid-by-country.component.css']
})
export class CovidByCountryComponent implements OnInit {

  countryStats = null;
  paramCountry = null;
  countryFlagUrl = null;

  countryNames = null;
  selectedCountry = "";

  errorMessage = "";

  constructor(private _dataProviderService: DataProviderService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {

    this._route.queryParamMap.subscribe(
      (params: ParamMap) => {
        this.paramCountry = params.get('country');
        console.log('ngOnInit: Selected Country is:' + this.paramCountry);

        // Validate parameter and retrieve data from source
        if ( this.paramCountry != null && 
              this.paramCountry != undefined && 
              this.paramCountry != "" &&
              this.paramCountry != "null") {
          console.log("Getting data for:"+this.paramCountry);
          this._dataProviderService.getStatsByCountry(this.paramCountry).subscribe(
            ( response => {
              this.countryStats = response;
              console.log(this.countryStats);
              this.countryFlagUrl = "https://www.countryflags.io/" + this.countryStats.countryInfo.iso2 + "/flat/32.png"
            }),
            ( error => {
              console.log("Error response received!");
              console.log(error);
              this.countryStats = null;
              this.errorMessage = "Oops! Something went wrong (select country name and try again).";
            })
          );
        } // if
        else
        {
          this.countryStats = null;
          console.log("No Country Name Provided!");
          this.errorMessage = "Please select Country Name"; 
        } // else   
      } // Parammap
    ); // subscribe

    console.log("Populating Country Names");
    //this._dataProviderService.populateCountryNamesFromSource();
    this.countryNames = this._dataProviderService.getCountryNames();
    this.selectedCountry = this.paramCountry;
    console.log("Done ngOnInit!");
  }

  onSelectChanged() {
    console.log("Select Changed:" + this.selectedCountry);

    // Navigate and load new country's data
    this._router.navigate(['/covid-by-country'],{ queryParams: {'country': this.selectedCountry.toLowerCase()}});
  }

}

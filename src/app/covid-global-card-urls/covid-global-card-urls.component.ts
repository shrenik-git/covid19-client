import { Component, OnInit, Input } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-covid-global-card-urls',
  templateUrl: './covid-global-card-urls.component.html',
  styleUrls: ['./covid-global-card-urls.component.css']
})
export class CovidGlobalCardUrlsComponent implements OnInit {

  @Input() public userCountry;

  countryStatsURL = "";

  constructor(private _dataProviderService: DataProviderService) { }

  ngOnInit(): void {
    // User Country Name if provided
    if (this.userCountry != null && this.userCountry != 'null') {
      this.countryStatsURL = "/covid-by-country/?country=" + this.userCountry;
    }
    // go for fresh location data
    else {
      console.log("Card URL:Getting Fresh IP Data");
      // Get User's location information
      this._dataProviderService.getLocationFromIP().subscribe(
        (response => {
          console.log(response);

          // Extract data
          this.userCountry = response.country;

          // Prepare country URL
          //this.userCountryDataURL = "https://corona.lmao.ninja/countries/" + this.userCountryName.toLowerCase();
          this.countryStatsURL = "/covid-by-country?country=" + this.userCountry.toLowerCase();
        }),
        (error => {
          console.log("Error response received!");
          console.log(error);
          this.countryStatsURL = "/covid-by-country";
        })
      );

    }
  }

}

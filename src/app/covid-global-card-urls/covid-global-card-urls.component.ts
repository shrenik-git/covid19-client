import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-covid-global-card-urls',
  templateUrl: './covid-global-card-urls.component.html',
  styleUrls: ['./covid-global-card-urls.component.css']
})
export class CovidGlobalCardUrlsComponent implements OnInit {

  @Input() public userCountry;

  countryStatsURL = "";

  constructor() { }

  ngOnInit(): void {
    this.countryStatsURL = "/covid-by-country/?country=" + this.userCountry;
  }

}

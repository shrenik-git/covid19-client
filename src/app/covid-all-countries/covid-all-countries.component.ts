import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-covid-all-countries',
  templateUrl: './covid-all-countries.component.html',
  styleUrls: ['./covid-all-countries.component.css']
})
export class CovidAllCountriesComponent implements OnInit {

  constructor(private _dataProiderService: DataProviderService) { }

  ngOnInit(): void {
  }

}

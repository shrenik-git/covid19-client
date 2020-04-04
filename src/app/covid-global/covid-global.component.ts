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
  constructor ( private _dataProviderService: DataProviderService) {}

  ngOnInit(): void {
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
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private _urlStatsGlobal = "https://corona.lmao.ninja/all";
  private _urlStatsByCountries = "https://corona.lmao.ninja/countries?sort=country";
  private _urlStatsByCountry = "https://corona.lmao.ninja/countries/";
  private _urlStatsHistorical = "https://corona.lmao.ninja/historical";
  private _urlGetLocationFromIP = "http://ip-api.com/json";

  constructor(private _http: HttpClient) { }

  getStatsGlobal(){
    return this._http.get<any>(this._urlStatsGlobal);
  }

  getStatsByCountries(){
    return this._http.get<any>(this._urlStatsByCountries);
  }

  getStatsByCountry(){
    return this._http.get<any>(this._urlStatsByCountry);
  }

  getStatsHistorical(){
    return this._http.get<any>(this._urlStatsHistorical);
  }

  getLocationFromIP() {
    return this._http.get<any>(this._urlGetLocationFromIP);
  }
}

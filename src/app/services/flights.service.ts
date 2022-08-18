import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  public API_URL = "https://recruiting-api.newshore.es/api/flights/0/"

  constructor(public http:HttpClient) { }

 getFlights():Observable<any>
  {
    return this.http.get(this.API_URL);
  }

  getOrigin(searchTerm:string):Observable<any>
  {
    return this.http.get(this.API_URL+"?"+searchTerm);
  }

}

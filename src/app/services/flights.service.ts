import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  public API_URL = "https://recruiting-api.newshore.es/api/flights/0/" //URL de conexion a la API

  // Contructor
  constructor(public http: HttpClient) {
  }

  // Obtener Vuelos
  getFlights(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  // Obtener origenes
  getOrigin(searchTerm: string): Observable<any> {
    return this.http.get(this.API_URL + "?" + searchTerm);
  }

  // Obtener destinos
  getDestination(searchTerm: string): Observable<any> {
    return this.http.get(this.API_URL + "?" + searchTerm);
  }

}

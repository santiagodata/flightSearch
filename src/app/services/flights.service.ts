import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {FlightInterface} from "../models/flights.interface";
import {FlightModel} from "../models/flights.model";

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  public API_URL = "https://recruiting-api.newshore.es/api/flights/1/" //URL de conexion a la API

  // Contructor
  constructor(public http: HttpClient) {
  }

  // // Obtener Vuelos
  public getFlights(): Observable<any> {
    return this.http.get<FlightInterface[]>(this.API_URL).pipe(
      map((resp: FlightInterface[]) => {
        return resp.map(flights => FlightModel.flightFromJSON(flights))

      })
    );
  }
}

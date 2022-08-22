import {FlightInterface} from "./flights.interface";


// Clase Flight
export class FlightModel implements FlightInterface {

  departureStation: string;
  arrivalStation: string;
  flightCarrier: string;
  flightNumber: string;
  price: number;


  constructor(departureStation: string, arrivalStation: string, flightCarrier: string, flightNumber: string, price: number) {
    this.departureStation = departureStation;
    this.arrivalStation = arrivalStation;
    this.flightCarrier = flightCarrier;
    this.flightNumber = flightNumber;
    this.price = price;
  }

  static flightFromJSON(obj: FlightInterface) {
    return new FlightModel
    (
      obj['departureStation'],
      obj['arrivalStation'],
      obj['flightCarrier'],
      obj['flightNumber'],
      obj['price'],
    )
  }

}



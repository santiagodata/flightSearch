import {FlightInterface} from "./flights.interface";


// Clase Flight
export class FlightModel implements FlightInterface {

  departureStation: string;
  arrivalStation: string;
  flightCarrier: string;
  flightNumber: string;
  price: number;


  constructor(origin: string, destination: string, flightCarrier: string, flightNumber: string, price: number) {
    this.departureStation = origin;
    this.arrivalStation = destination;
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










  // origin: string;
  // destination: string;
  // flightCarrier: string;
  // flightNumber: string;
  // price: number;
  //
  //







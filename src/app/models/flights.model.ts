import {FlightInterface} from "./flights.interface";


// Clase Flight
export class FlightModel implements FlightInterface {

  origin: string;
  destination: string;
  flightCarrier: string;
  flightNumber: string;
  price: number;


  constructor(origin: string, destination: string, flightCarrier: string, flightNumber: string, price: number) {
    this.origin = origin;
    this.destination = destination;
    this.flightCarrier = flightCarrier;
    this.flightNumber = flightNumber;
    this.price = price;
  }

  static flightFromJSON(obj: FlightInterface) {
    return new FlightModel
    (
      obj['origin'],
      obj['destination'],
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







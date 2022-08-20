import {FlightInterface} from "./flights.interface";


// Clase Flight
export class Flight implements FlightInterface{

  arrivalStation: string;
  departureStation: string;
  flightCarrier: string;
  flightNumber: keyof FlightInterface;
  price: number;


  constructor(arrivalStation: string, departureStation: string, flightCarrier: string, flightNumber: keyof FlightInterface, price: number) {
    this.arrivalStation = arrivalStation;
    this.departureStation = departureStation;
    this.flightCarrier = flightCarrier;
    this.flightNumber = flightNumber;
    this.price = price;
  }

  static flightFromJSON(obj: FlightInterface) {
    return new Flight
      (
        obj['departureStation'],
        obj['arrivalStation'],
        obj['flightCarrier'],
        obj['flightNumber'],
        obj['price']
      )
  }




}




//
// // export class Transport implements TransportInterface{
// //   flightCarrier: string = "";
// //   flightNumber: string = "";
// // }
// //
// // export class Flight extends Transport implements FlightInterface{
// //   transport: Transport = new Transport;
// //   origin: string = "";
// //   destination: string = "";
// //   price: number = 0;
// // }
// //
// // export class Journey extends Flight implements JourneyInterface{
// //   flights: Flight[] = []
// //
// // }
//
//
//
// // Clase Flight
// export class Flight implements FlightInterface {
//
//   journey: Journey = new Journey[];
//
//   constructor(journey: Journey) {
//     this.journey = journey;
//   }
// }
//
//
// // Clase Journey
// export class Journey implements JourneyInterface{
//   origin:      string = "";
//   destination: string = "";
//   price:       number = 0;
//   flights?:    Journey[];
//   transport?:  Transport;
//
//
//   constructor(origin: string, destination: string, price: number, flights: Journey[], transport: Transport) {
//     this.origin = origin;
//     this.destination = destination;
//     this.price = price;
//     this.flights = flights;
//     this.transport = transport;
//   }
// }
//
// export class Transport implements TransportInterface{
//   flightCarrier: string = "";
//   flightNumber:  string = "";
//
//   constructor(flightCarrier: string, flightNumber: string) {
//     this.flightCarrier = flightCarrier;
//     this.flightNumber = flightNumber;
//   }
// }
//
//
//

import {FlightInterface, JourneyInterface, TransportInterface} from "./flights.interface";

// DEFINICION DE CLASES

export class Transport implements TransportInterface{
  flightCarrier: string = "";
  flightNumber: string = "";
}

export class Flight extends Transport implements FlightInterface{
  transport: Transport = new Transport;
  origin: string = "";
  destination: string = "";
  price: number = 0;
}

export class Journey extends Flight implements JourneyInterface{
  flights: Flight[] = []

}





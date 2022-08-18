export interface TransportInterface{
  flightCarrier: string;
  flightNumber: string;
}

export interface FlightInterface extends TransportInterface{
  origin: string;
  destination: string;
  price: number;
}

export interface JourneyInterface extends FlightInterface{
  flights: FlightInterface[]
}

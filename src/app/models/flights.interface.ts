export interface FlightInterface {
  departureStation: string;
  arrivalStation:   string;
  flightCarrier:    string;
  flightNumber:     keyof FlightInterface;
  price:            number;
}



// // export interface TransportInterface{
// //   flightCarrier: string;
// //   flightNumber: string;
// // }
// //
// // export interface FlightInterface extends TransportInterface{
// //   origin: string;
// //   destination: string;
// //   price: number;
// // }
// //
// // export interface JourneyInterface extends FlightInterface{
// //   flights: FlightInterface[]
// // }
//
// export interface FlightInterface {
//   journey: JourneyInterface;
// }
//
// export interface JourneyInterface {
//   origin:      string;
//   destination: string;
//   price:       number;
//   flights?:    JourneyInterface[];
//   transport?:  TransportInterface;
// }
//
// export interface TransportInterface {
//   flightCarrier: string;
//   flightNumber:  string;
// }
//
//
//

//

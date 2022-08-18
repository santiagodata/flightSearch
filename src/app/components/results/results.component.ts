import {AfterViewInit, Component, Injectable, ViewChild} from '@angular/core';
import {FlightsService} from "../../services/flights.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  flights: any;
  cop: number = 4344.55
  eur: number = 0.98
  selectCurrency: string = "USD";


  constructor(public flight: FlightsService) {}

  ngOnInit() {
    this.flight.getFlights().subscribe
    (
      (r) => {
        this.flights = r;
        console.log(r)
      },
      (e) => {
        console.error(e)
      }
    )
  }
}




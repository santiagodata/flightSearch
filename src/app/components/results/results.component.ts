import {Component} from '@angular/core';
import {FlightsService} from "../../services/flights.service";
import {FormSearchComponent} from '../form-search/form-search.component'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

// Clase Results
export class ResultsComponent {
  flights: any;
  cop: number = 4344.55
  eur: number = 0.98
  selectCurrency: string = "USD";

//Constructor
  constructor(public flightsService: FlightsService,
              public formSearch:FormSearchComponent
  ) {
  }


  // Llamar metodo getFlights

  // ngOnInit() {
  //   this.flight.getFlights().subscribe
  //   (
  //     (r) => {
  //       this.flights = r;
  //       console.log(r)
  //     },
  //     (e) => {
  //       console.error(e)
  //     }
  //   )
  // }


  ngOnInit(): void {
    this.getFlights();
  }

  public getFlights() {
    this.flightsService.getFlights().subscribe((resp) => {
      this.flights= resp;
      console.log(resp)
    });
  }

// Input Max.Flights
   public setInputMaxFlights(numberFlights: number) {
    this.formSearch.getInputMaxFlights
    console.log('number max flights:' + numberFlights);
  }



}




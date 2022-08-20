import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FlightsService} from "../../services/flights.service";
import {FlightModel} from "../../models/flights.model";

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})

// Clase para FormSearch
export class FormSearchComponent {

  searchForm = this.fb.group({
    origin: [null, Validators.required],
    destination: [null, Validators.required],
  });
  public flights: any = []
  public elementResult: boolean = false;
  origin: string = ""
  destination: string = "";


  // Constructor

  constructor(
    private fb: FormBuilder,
    public flightService: FlightsService,
  ) {
  }

  firstFormGroup: FormGroup = this.fb.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this.fb.group({secondCtrl: ['']});
  hasUnitNumber = false;
  myControl = new FormControl('');

  // Datos Origin
  dataOrigin: string[] = ['BOG', 'CTG', 'MDE', 'MZL', 'PEI']

  // bogota:string [] = this.getFlights().filter(persona => persona.edad >= 18);

  dataArrOrigin: Set<string> = new Set(this.dataOrigin);
  optionsOrigin = [...this.dataArrOrigin];

  // Datos Destination
  dataDestination: string[] = ['BCN', 'BOG', 'CAN', 'CTG', 'MAD', 'MEX']
  dataArrDestination: Set<string> = new Set(this.dataDestination);
  optionsDestination = [...this.dataArrDestination];


// Obtener vuelos

  ngOnInit(): void {
    this.getFlights();
  }

  public getFlights() {
    this.flightService.getFlights().subscribe((resp) => {
      this.flights = resp;
      console.log(resp)
    });
  }


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


  // Mostrar componente resultado
  showResults() {
    return this.elementResult = true
  }

  //Validar valores repetidos
  repeatValidation(inputOrigin: string, inputDestination: string) {
    if (inputOrigin == inputDestination) {
      alert('Origin y Destination deben ser valores diferentes');
    }

    if (inputOrigin == inputDestination) {
      this.elementResult = false
    }
  }


// Input Origin
  public getInputOrigin(inputOrigin: string) {
    console.log(inputOrigin);
  }


// Input Destination
  public getInputDestination(inputDestination: string) {
    console.log(inputDestination);
  }


// Input Max.Flights
  public getInputMaxFlights(numberFlights: number) {
    return numberFlights
    console.log('number max flights:' + numberFlights);
  }



}

import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FlightsService} from "../../services/flights.service";

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent {

  searchForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
  });

  public flights: any = []
  public elementResult: boolean = false;

  constructor(
    private fb: FormBuilder,
    public flight:FlightsService
  ) {
  }

  firstFormGroup: FormGroup = this.fb.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this.fb.group({secondCtrl: ['']});


  hasUnitNumber = false;

  myControl = new FormControl('');

  dataOrigin: string[] = ['BGT', 'CTG', 'MDE', 'MZL', 'PEI']
  dataArrOrigin: Set<string> = new Set(this.dataOrigin);
  optionsOrigin = [...this.dataArrOrigin];

  dataDestination: string[] = ['BCN', 'BOG', 'CAN', 'CTG', 'MAD', 'MEX']
  dataArrDestination: Set<string> = new Set(this.dataDestination);
  optionsDestination = [...this.dataArrDestination];


  onSubmit(): void {
    alert('Thanks!');
  }

  ngOnInit(){
    this.flight.getFlights().subscribe
    (
      (r)=>{this.flights = r; console.log(r)},
      (e)=>{console.error(e)}

    )
  }

  getOrigin(searchTerm:string){
    this.flight.getOrigin(searchTerm).subscribe(data =>{
      console.log(data);
    }    )

  }

  showResults(){
   return this.elementResult = true
  }



}

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

  constructor(
    private fb: FormBuilder,
    public flight:FlightsService
  ) {
  }

  firstFormGroup: FormGroup = this.fb.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this.fb.group({secondCtrl: ['']});


  hasUnitNumber = false;

  myControl = new FormControl('');

  data: string[] = ['valor1', 'valor2']


  dataArr: Set<string> = new Set(this.data);

  options = [...this.dataArr];

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

}

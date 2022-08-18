import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FlightsService} from "../services/flights.service";

@Component({
  selector: 'app-formulario-buscar',
  templateUrl: './formulario-buscar.component.html',
  styleUrls: ['./formulario-buscar.component.css']
})
export class FormularioBuscarComponent implements OnInit{
  public flights: any = []
  constructor(private fb: FormBuilder,
  private flightsService: FlightsService

  ) {}
  firstFormGroup: FormGroup = this.fb.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this.fb.group({secondCtrl: ['']});


  searchForm = this.fb.group({
    origin: [null, Validators.required],
    lastName: [null, Validators.required],
  });

  hasUnitNumber = false;
  myControl = new FormControl('');

  data: string[] = ['valor1', 'valor2'];

  dataArr: Set<string> = new Set(this.data);

  options = [...this.dataArr];



//   options: string[] =
//   states = [
// ];


  onSubmit(): void {
    alert('Thanks!');
  }

  ngOnInit(): void {

    this.flightsService.getFlight()
      .subscribe(resp => {

        console.log(resp)
        this.flights = resp
      })

  }

}

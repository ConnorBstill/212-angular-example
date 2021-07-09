import { 
  Component, 
  ViewChild, 
  ElementRef, 
  AfterViewInit,
  OnInit
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Car } from '../app/interfaces/car.interface';

import { CarsService } from '../app/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
  }
}

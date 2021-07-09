import { 
  Component, 
  ViewChild, 
  ElementRef,
  OnInit
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Car } from '../interfaces/car.interface';

import { CarsService } from '../cars.service';
@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {

  @ViewChild('firstIntegerInput', { static: false }) firstIntegerInput: ElementRef;

  title = 'asdf';

  firstInteger: number = 0;
  secondInteger: number = 0;

  placeholder: string = '';

  cars: Car[] = [];

  makeToAdd = '';
  modelToAdd = '';
  yearToAdd: any = null;

  userForm: FormGroup;

  constructor(
    private readonly carsService: CarsService,
    private readonly formBuilder: FormBuilder,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', []],
      userName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
    });

    if (this.router.getCurrentNavigation()) {
      console.log(this.router.getCurrentNavigation()?.extras?.state);
    }
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('params', params)
    });

    this.cars = this.carsService.getCars();

    this.userForm.valueChanges.subscribe(val => {
      
      console.log('val', val)
    });
  }

  ngAfterViewInit() {
    console.log(this.firstIntegerInput)
  }

  logForm() {
    console.log('userForm', this.userForm);
  }

  addTwoNumbers(a: number, b: number) {
    return a + b;
  }

  resetNumbers(): void {
    this.firstInteger = 0;
    this.secondInteger = 0;
  }

  returnFirstInteger() {
    return this.firstInteger
  }

  returnSecondInteger() {
    return this.secondInteger
  }

  addCar() {
    this.cars.push({ 
      make: this.makeToAdd,
      model: this.modelToAdd,
      year: this.yearToAdd
    });

    this.makeToAdd = '';
    this.modelToAdd = '';
    this.yearToAdd = null;
  }

  removeCar(index: number) {
    this.cars.splice(index, 1);
  }
}

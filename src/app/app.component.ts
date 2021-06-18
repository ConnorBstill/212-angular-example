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
export class AppComponent implements AfterViewInit, OnInit {

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
    private readonly formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      firstName: ['', []],
      lastName: ['', []],
      userName: ['', []],
      email: ['', []],
    });
  }

  ngOnInit() {
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

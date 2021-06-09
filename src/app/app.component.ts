import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asdf';

  firstInteger: number = 0;
  secondInteger: number = 0;

  placeholder: string = '';

  cars = [
    {
      make: 'Honda',
      model: 'Civic',
      year: 2005
    },
    {
      make: 'Toyota',
      model: 'Prius',
      year: 2010
    },
    {
      make: 'Ford',
      model: 'Focus',
      year: 2006
    },
    {
      make: 'Ford',
      model: 'F-150',
      year: 2012
    }
  ];

  makeToAdd = '';
  modelToAdd = '';
  yearToAdd: any = null;

  addTwoNumbers(a: number, b: number) {
    return a + b;
  }

  resetNumbers(): void {
    this.firstInteger = 0;
    this.secondInteger = 0;
  }

  returnFirstInteger() {
    console.log('returnFirstInteger')
    return this.firstInteger
  }

  returnSecondInteger() {
    console.log('returnSecondInteger')
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

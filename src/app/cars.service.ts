import { Injectable } from '@angular/core';
import { Car } from './interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  cars: Car[] = [
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

  constructor() { }

  getCars(): Car[] {
    return this.cars;
  }
}

import { 
  Component,
  Input,
  OnInit, 
  AfterContentChecked,
  AfterContentInit
} from '@angular/core';

import { Car } from '../interfaces/car.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, AfterContentChecked, AfterContentInit {
  @Input() car: Car = {
    make: '',
    model: '',
    year: 0
  }

  constructor() {
    console.log('ListItemComponent constructor');
  }

  ngOnInit(): void {
    console.log('ListItemComponent on init');
  }

  ngAfterContentInit() {
    console.log('ListItemComponent ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ListItemComponent ngAfterContentChecked');
  }

  removeCar(event: number) {

  }
}

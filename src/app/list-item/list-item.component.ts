import { 
  Component,
  Input,
  OnInit, 
  AfterContentChecked,
  AfterContentInit,
  EventEmitter,
  Output
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

  @Output() removeCarEvent = new EventEmitter();

  constructor() {
    // console.log('ListItemComponent constructor');
  }

  ngOnInit(): void {
    // console.log('ListItemComponent on init');
  }

  ngAfterContentInit() {
    // console.log('ListItemComponent ngAfterContentInit');
  }

  ngAfterContentChecked() {
    // console.log('ListItemComponent ngAfterContentChecked');
  }

  removeCar() {
    this.removeCarEvent.emit();
  }
}

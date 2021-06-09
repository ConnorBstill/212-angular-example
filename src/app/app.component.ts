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
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardForm: FormGroup;

  constructor(
    public readonly formBuilder: FormBuilder
  ) {
    this.cardForm = this.formBuilder.group({
      name: ['', []],
      age: [null, []]
    });
  }

  ngOnInit(): void {
  }

}

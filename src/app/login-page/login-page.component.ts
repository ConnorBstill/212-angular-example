import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  logIn() {
    this.router.navigate(
      ['/cars'],
      { 
        queryParams: {
          queryParamKey: 'Query param value'
        },
        state: {
          routerStateKey: 'Router state value'
        }
      }
    );
  }
}

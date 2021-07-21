import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  logIn() {
    this.httpService.createPost({ title: 'Post title' });

    // this.router.navigate(
    //   ['/cars'],
    //   { 
    //     queryParams: {
    //       queryParamKey: 'Query param value'
    //     },
    //     state: {
    //       routerStateKey: 'Router state value'
    //     }
    //   }
    // );
  }
}

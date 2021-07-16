import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

import { TitleCase } from './title-case.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemModule } from './list-item/list-item.module';

import { CarsService } from './cars.service';
import { CardComponent } from './card/card.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LoginPageComponent,
    CarsPageComponent,
    TitleCase
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ListItemModule,
    ReactiveFormsModule,
  ],
  providers: [CarsService, DatePipe, TitleCase],
  bootstrap: [AppComponent]
})
export class AppModule { }

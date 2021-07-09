import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    CarsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ListItemModule,
    ReactiveFormsModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

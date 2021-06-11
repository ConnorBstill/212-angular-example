import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ListItemComponent } from './list-item.component';

@NgModule({
  declarations: [
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  exports: [ListItemComponent]
})
export class ListItemModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorNotificationComponent } from './components/error-notification/error-notification.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    ErrorNotificationComponent
  ],
  declarations: [ErrorNotificationComponent]
})
export class SharedModule { }

// app.module.ts

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [SignupComponent],
})
export class AppModule {}

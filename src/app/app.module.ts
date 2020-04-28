import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { infoDetails } from './info';
import { StartComponent } from './start/start.component';
import { TestComponent } from './home/test/test.component';
import { Test2Component } from './home/test2/test2.component';
import { CompleteComponent } from './home/complete/complete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    TestComponent,
    Test2Component,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

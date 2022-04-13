import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1/page1.component';
import { MuestraNombresComponent } from './components/muestra-nombres/muestra-nombres.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    MuestraNombresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

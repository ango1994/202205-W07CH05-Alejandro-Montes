import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RobotsPageComponent } from './robots-page/robots-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RobotsPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

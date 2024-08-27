import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';
import { AppRoutingModule } from './app-routing.module';
import { TimerStringComponent } from './timer-string/timer-string.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerStringComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

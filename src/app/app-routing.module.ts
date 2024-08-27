import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { TimerStringComponent } from './timer-string/timer-string.component';

const routes: Routes = [
  { path: '', component: TimerComponent },
  { path: 'timer', component: TimerStringComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
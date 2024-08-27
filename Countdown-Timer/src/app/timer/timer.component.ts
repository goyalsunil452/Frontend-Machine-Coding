import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent{

  hours = 0;
  minutes = 0;
  seconds = 0;
  
  timer: any = null;
  
  startEnabled: boolean = true;
  pauseEnabled: boolean = false;
  continueEnabled: boolean = false;

  startTimer() {
    if(!this.hours && !this.minutes && !this.seconds) return;
    this.startEnabled = false;
    this.pauseEnabled = true;
    this.continueEnabled = false;
    this.timer = setInterval(()=>{
      if (this.seconds > 0) {
        this.seconds--;
      } else if (this.minutes > 0) {
        this.minutes--;
        this.seconds = 59;
      } else if (this.hours > 0) {
        this.hours--;
        this.minutes = 59;
        this.seconds = 59;
      } else {
        this.resetTimer();
      }
    },1000);
  }

  pauseTimer() {
    clearInterval(this.timer);
    this.startEnabled = false;
    this.pauseEnabled = false;
    this.continueEnabled = true;
  }

  continueTimer() {
    this.pauseEnabled = true;
    this.startTimer();
  }

  resetTimer() {
    clearInterval(this.timer);
    this.hours = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.startEnabled = true;
    this.pauseEnabled = false;
    this.continueEnabled = false;
  }

  adjustHours() {
    // if()
  }

  adjustMinutes() {
    if(this.minutes >= 60){
      const h = Math.floor(this.minutes/60);
      this.minutes = h % 60;
      this.hours +=h;
    }
  }

  adjustSeconds() {
    if(this.seconds >= 60){
      const m = Math.floor(this.seconds/60);
      this.seconds = m % 60;
      this.minutes +=m;
    }
  }

  formatNumber(value:any) {
    return value < 10 ? '0' + value : value;
  }

}

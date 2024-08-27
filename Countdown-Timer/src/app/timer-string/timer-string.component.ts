import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-string',
  templateUrl: './timer-string.component.html',
  styleUrls: ['./timer-string.component.scss']
})
export class TimerStringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  timer: any = null;

  startEnabled: boolean = true;
  pauseEnabled: boolean = false;
  continueEnabled: boolean = false;

  startTimer() {
    if (!this.hours && !this.minutes && !this.seconds) return;
    this.startEnabled = false;
    this.pauseEnabled = true;
    this.continueEnabled = false;
    this.timer = setInterval(() => {
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
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.timer);
    this.startEnabled = false;
    this.pauseEnabled = false;
    this.continueEnabled = true;
  }

  continueTimer() {
    this.startTimer();
  }

  resetTimer() {
    clearInterval(this.timer);
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.startEnabled = true;
    this.pauseEnabled = false;
    this.continueEnabled = false;
  }

  adjustHours() {
    
  }

  adjustMinutes() {
    console.log(this.minutes)
    if (this.minutes >= 60) {
      const h = Math.floor(this.minutes / 60);
      this.minutes = this.minutes % 60;
      this.hours += h;
    }
  }

  adjustSeconds() {
    if (this.seconds >= 60) {
      const m = Math.floor(this.seconds / 60);
      this.seconds = this.seconds % 60;
      this.minutes += m;
    }
  }

  formatNumber(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  onInputChange(field: string, event: any) {
    const value = event.target.value;
    if (value !== '') {
      const numericValue = parseInt(value);
      console.log(value,numericValue)
      if (field === 'hours') {
        this.hours = numericValue;
      } else if (field === 'minutes') {
        this.minutes = numericValue;
      } else if (field === 'seconds') {
        this.seconds =numericValue;
      }
      this.adjustSeconds();
      this.adjustMinutes();
      this.adjustHours();
    } else {
      if (field === 'hours') this.hours = 0;
      if (field === 'minutes') this.minutes = 0;
      if (field === 'seconds') this.seconds = 0;
    }
  }
}

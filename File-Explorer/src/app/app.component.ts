import { Component, OnInit } from '@angular/core';
import explorer from './folderData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'File-Explorer';
  explorerData :any;
  ngOnInit(){
    this.explorerData= explorer;
  }
}

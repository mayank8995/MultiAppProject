import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MultiAppProject';
  constructor(){
  }
  onActivate(event){
    console.log("event>>",event);
  }
}

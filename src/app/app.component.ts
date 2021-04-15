import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MultiAppProject';

  constructor(){

  }
  ngOnInit(): void {
    this.showCordinate();
  }
  onActivate(event){
    console.log("event>>",event);
  }

  private showCordinate(){
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(this.showPosition);
    // }
  }
   showPosition(position) {
   console.log(position);
  }
  
}

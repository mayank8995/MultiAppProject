import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MultiAppProject';
  constructor(private router:Router){
    // this.router.navigate(['./blog']);
  }
  onActivate(event){
    console.log("event>>",event);
  }
}

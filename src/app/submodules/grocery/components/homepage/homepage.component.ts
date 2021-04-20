import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  loader: boolean = true;
  data: any;
  constructor() { }

  ngOnInit(): void {

    
  }

}

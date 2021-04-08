import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.scss']
})
export class BlogMainComponent implements OnInit {

  constructor(private router: Router) {
    // this.router.navigate(['./article']);
   }

  ngOnInit() {
  }

}

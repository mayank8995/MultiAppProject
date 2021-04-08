import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BLOGDATA } from 'src/app/util/blog';
import { InmemorydataService } from '../../services/inmemorydata.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  state:any;
  blogData:any;
  index: number;
  constructor(private router: Router, private inmemorydataService: InmemorydataService, private domSanitizer: DomSanitizer) {
    this.state = this.router.getCurrentNavigation().extras.state;
    console.log(this.state);
   }

  ngOnInit() {
    if(this.state && this.state.articleIndex){
      this.index = +this.state.articleIndex['queryParams'].id;
      this.blogData = this.inmemorydataService.getArticleData(this.index);
      this.blogData.content = this.domSanitizer.bypassSecurityTrustHtml(this.blogData?.content);
      console.log(this.blogData);
    }
  }

}

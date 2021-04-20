import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BLOGDATA } from 'src/app/util/blog';
import { HttpService } from '../../services/http.service';
import { InmemorydataService } from '../../services/inmemorydata.service';
import { blogDataLoaded, selectBlogData } from './blog.selectors';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  state:any;
  blogData:BLOGDATA;
  index: number;
  constructor(private store:Store<BLOGDATA> ,private http:HttpService, private router: Router, private inmemorydataService: InmemorydataService, private domSanitizer: DomSanitizer) {
    this.state = this.router.getCurrentNavigation().extras.state;
    console.log(this.state);
   }

  ngOnInit() {
    if(this.state && this.state.articleIndex){
      this.index = +this.state.articleIndex['queryParams'].id;
      console.log("this.index blog component>>>",this.index)
      // this.store.pipe(select(selectBlogData)).subscribe((res) => {
      //   console.log("adat",res);
      //   this.blogData = JSON.parse(JSON.stringify(res[this.index]));
      //   console.log("this.blogData>>>",this.blogData)
      //  this.blogData.content = this.domSanitizer.bypassSecurityTrustHtml(this.blogData?.content.toString());
      // })
      this.http.getArticleById(this.index).subscribe((res) => {
        this.blogData = res;
        // this.blogData.content = this.domSanitizer.bypassSecurityTrustHtml(this.blogData?.content.toString());
      })
    }
  }
  

}

import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RequestCore } from 'angular-in-memory-web-api';
import { ARTICLE } from 'src/app/util/article';
import { InmemorydataService } from '../../services/inmemorydata.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles:ARTICLE[]=[];
  constructor(private inmemorydataService: InmemorydataService, private router: Router) { }

  ngOnInit() {
   let data = this.inmemorydataService.createDb();
   this.articles = data['articles']
     console.log(this.articles);
  }
  trackById(index, item) {
    return index;
  }
  onArticleClick(articleId: string){
    let objToSend: NavigationExtras = {
      queryParams: {
      id: articleId
      },
  };
  this.router.navigate(['/blog/content'], { 
    state: { articleIndex: objToSend }
  });
  }
}

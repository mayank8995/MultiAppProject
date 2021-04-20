import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { RequestCore } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { ARTICLE } from 'src/app/util/article';
import { HttpService } from '../../services/http.service';
import { InmemorydataService } from '../../services/inmemorydata.service';
import { actions } from './action-types';
import { selectArticleData} from './article.selectors';
import { ArticleState } from './articles.reducers';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  $articles:Observable<ARTICLE[]>;
  constructor(private store:Store<ArticleState>,private inmemorydataService: InmemorydataService, private router: Router, private http: HttpService) { }

  ngOnInit() {
  //  let data = this.inmemorydataService.createDb();
  //  this.articles = data['articles']
  //  this.http.getArticles().subscribe(res => {
  //   this.articles = res;
  //  });
  this.$articles = this.store.pipe(select(selectArticleData));
  //  console.log(this.articles);
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ARTICLE } from 'src/app/util/article';
import { BLOGDATA } from 'src/app/util/blog';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
    
   }

   getArticles():Observable<ARTICLE[]>{
     console.log("inside");
    return this.http.get<ARTICLE[]>('http://localhost:3000/articles');
   }

   getArticleById(index):Observable<BLOGDATA>{
    console.log("inside");
   return this.http.get<BLOGDATA>(`http://localhost:3000/articles/${index}`);
  }

}

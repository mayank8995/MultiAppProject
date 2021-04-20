import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, finalize, first, tap } from "rxjs/operators";
import { AppState } from "src/app/reducers";
import { ARTICLE } from "src/app/util/article";
import { loadingArticles } from "./articles.actions";
import { areArticlesLoaded } from "./article.selectors";
import { ArticleState } from "./articles.reducers";


@Injectable()
export class BlogResolver implements Resolve<any>{

    loading = false;
    constructor(private store: Store<ArticleState>){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        return this.store
        .pipe(
            select(areArticlesLoaded),
            tap((dataLoded) => {
                console.log("dataloaded resolver>>",dataLoded);
                if(!this.loading && !dataLoded){
                    this.loading = true;
                    this.store.dispatch(loadingArticles());
                }
            }),
            filter(dataLoaded => dataLoaded),
            first(),
            finalize(() => this.loading = false)
        );
    }
    
}
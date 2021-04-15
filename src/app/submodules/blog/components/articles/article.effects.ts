import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpService } from "../../services/http.service";
import { actions } from "./action-types";
import { articlesLoaded } from "./articles.actions";
import { concatMap, map } from "rxjs/operators";

@Injectable()
export class ArticleEffects {

    constructor(private $action: Actions, private http: HttpService){}

    $loadArticle = createEffect(
        () => this.$action.
        pipe(
            ofType(actions.loadingArticles),
            concatMap(action => this.http.getArticles()),
            map(article => articlesLoaded({article}))
        )
    );

}
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";

import { HttpService } from "../../services/http.service";
import * as blogactionsfrom from './blog.actions'
import { blogDataLoaded } from "./blog.actions";

@Injectable()
export class BlogDataEffects {

    state: any;
    constructor(private $action: Actions, private http: HttpService,  private router: Router){}

    $loadingBlog = createEffect(() => 
    this.$action.pipe(
        ofType(blogactionsfrom.loadingBlogData),
        concatMap((action) => {
            this.state = this.router.getCurrentNavigation().extras.state;
            console.log("this.state>>>",this.state);
            return this.http.getArticleById(+this.state.articleIndex['queryParams'].id)
        }),
        map(blog => blogDataLoaded({blog}))
    ))

}
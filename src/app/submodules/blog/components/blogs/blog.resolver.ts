import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, finalize, first, tap } from "rxjs/operators";
import { loadingBlogData } from "./blog.actions";
import { BlogState } from "./blog.reducers";
import { blogDataLoaded, selectBlogData } from "./blog.selectors";


@Injectable()
export class BlogDataResolver implements Resolve<any> {
    loading = false;
    state: any;
    constructor(private store: Store<BlogState>, private router: Router){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        console.log("ins resolver");
        return this.store.pipe(
            select(blogDataLoaded),
            tap((dataLoaded) => {
                console.log("blog resolver>>>",dataLoaded);
                // if(dataLoaded){
                //     this.store.pipe(select(selectBlogData)).subscribe((res) => {
                //         console.log("res blog resolver>>>",res);
                //         this.state = this.router.getCurrentNavigation().extras.state;
                //         let blogId = +this.state.articleIndex['queryParams'].id;
                //         console.log("this.state blog resolver>>>",this.state,"blogId>>>",blogId);
                //         if(blogId !== Number(res[0]['id'])){
                //             this.loading = true;
                //             this.store.dispatch(loadingBlogData())
                //         }
                //     });
                // }
                // else 
                // if(!this.loading && !dataLoaded){
                    this.loading = true;
                    this.state = this.router.getCurrentNavigation().extras.state;
                    let blogId = +this.state.articleIndex['queryParams'].id;
                    this.store.dispatch(loadingBlogData({id:blogId}))
                // }
            }),
            filter(dataLoaded => {
                console.log("filter ",dataLoaded);
                return dataLoaded}),
            first(),
            finalize(() => this.loading = false)
        )
    }
}
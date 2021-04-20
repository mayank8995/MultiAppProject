import { getSelectors, RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { blogFeatureKey, BlogState, selectAll } from "./blog.reducers";

//
export const selectRouter = createFeatureSelector<RouterReducerState>('router');

export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = getSelectors(selectRouter);
console.log("dsdfdsfds",selectQueryParam,selectRouteParams);
//
export const blogSelectorState = createFeatureSelector<BlogState>(blogFeatureKey);

export const selectBlogData = createSelector(
    blogSelectorState,
    selectAll);
export const blogDataLoaded = createSelector(
    blogSelectorState,
    selectRouteParams,
    state => {
    console.log("datatadfsdfsdfdsfds>>>",selectQueryParam('id')," >>",selectQueryParam);    
     return state.isblogLoaded;
    })
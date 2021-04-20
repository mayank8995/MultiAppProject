import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ARTICLE } from "src/app/util/article";
import * as reducer from './articles.reducers';
import { ArticleState } from "./articles.reducers";

export const selectArticleState = createFeatureSelector<ArticleState>(reducer.articleFeatureKey);

export const selectArticleData = createSelector(
    selectArticleState,
    reducer.selectAll)

export const areArticlesLoaded = createSelector(
    selectArticleState,
    state => state.isarticleLoaded
)
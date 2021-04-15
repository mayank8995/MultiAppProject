import { createAction, props } from "@ngrx/store";
import { ARTICLE } from "src/app/util/article";
export const loadingArticles = createAction('[Loading Article List]');
export const articlesLoaded = createAction('[Articles Loaded]',
props<{article:ARTICLE[]}>());
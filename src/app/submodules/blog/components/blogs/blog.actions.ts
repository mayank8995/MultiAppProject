import { createAction, props } from "@ngrx/store";
import { BLOGDATA } from "src/app/util/blog";


export const loadingBlogData = createAction('[Loading Blog Data]',
props<{id: number}>());
export const blogDataLoaded = createAction('[Blog data Loaded]',
props<{blog:BLOGDATA}>())
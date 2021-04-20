import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { ARTICLE } from "src/app/util/article";
import { actions } from "./action-types";

export const articleFeatureKey = 'article';

export interface ArticleState extends EntityState<ARTICLE> {
  isarticleLoaded: boolean;
}
export const adapter = createEntityAdapter<ARTICLE>();
export const initialState = adapter.getInitialState({
    isarticleLoaded: false
});
export const articlesLoaded = createReducer(initialState,
    on(actions.articlesLoaded,(state, action) => {
        console.log("reducer",state);
        return adapter.addMany(action.article,{...state,isarticleLoaded:true})
    }
        ))
export const {
    selectAll
} = adapter.getSelectors();
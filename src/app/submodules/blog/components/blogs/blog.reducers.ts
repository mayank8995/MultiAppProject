import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { BLOGDATA } from "src/app/util/blog";
import * as blogaction from './blog.actions'

export const blogFeatureKey = 'blog';

export interface BlogState extends EntityState<BLOGDATA> {
  isblogLoaded: boolean;
  id: string;
}
export const adapter = createEntityAdapter<BLOGDATA>();

export const initialState = adapter.getInitialState({
    isblogLoaded: false,
    id: '-1'
});

export const blogReducer = createReducer(initialState,
    on(blogaction.blogDataLoaded, (state, action) => {
        return adapter.addOne(action.blog,{...state,isblogLoaded:true,id:action.blog.id})
    }));
export const {selectAll} = adapter.getSelectors();
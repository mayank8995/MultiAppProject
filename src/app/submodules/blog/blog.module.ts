import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogMainComponent } from './components/blog-main/blog-main.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AboutComponent } from './components/about/about.component';
import { ClapComponentComponent } from './components/clap-component/clap-component.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as articleReducer from '../../submodules/blog/components/articles/articles.reducers' 
import * as blogReducer from '../../submodules/blog/components/blogs/blog.reducers'
import { ArticleEffects } from './components/articles/article.effects';
import { EffectsModule } from '@ngrx/effects';
import { BlogResolver } from './components/articles/article.resolver';
import { BlogDataEffects } from './components/blogs/blog.effects';
import { BlogDataResolver } from './components/blogs/blog.resolver';


@NgModule({
  declarations: [BlogMainComponent, ArticlesComponent, BlogsComponent, AboutComponent, ClapComponentComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    StoreModule.forFeature(articleReducer.articleFeatureKey,articleReducer.articlesLoaded),
    StoreModule.forFeature(blogReducer.blogFeatureKey,blogReducer.blogReducer),
    EffectsModule.forFeature([ArticleEffects]),
    // EffectsModule.forFeature([BlogDataEffects])
  ],
  providers: [ArticleEffects,BlogResolver]
})
export class BlogModule { }

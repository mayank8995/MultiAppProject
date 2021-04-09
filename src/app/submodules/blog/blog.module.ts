import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogMainComponent } from './components/blog-main/blog-main.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AboutComponent } from './components/about/about.component';
import { ClapComponentComponent } from './components/clap-component/clap-component.component';



@NgModule({
  declarations: [BlogMainComponent, ArticlesComponent, BlogsComponent, AboutComponent, ClapComponentComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }

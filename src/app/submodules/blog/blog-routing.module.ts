import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogResolver } from './components/articles/article.resolver';
import { ArticlesComponent } from './components/articles/articles.component';
import { BlogMainComponent } from './components/blog-main/blog-main.component';
import { BlogDataResolver } from './components/blogs/blog.resolver';
import { BlogsComponent } from './components/blogs/blogs.component';


const routes: Routes = [{
  path: '',
  component: BlogMainComponent,
  children: [
    {
      path:'article',
      component:ArticlesComponent,resolve: {
        blog: BlogResolver
      }
    },
    {
      path:'about',
      component: AboutComponent
    }
  ]
},
{
  path:'content',
  component: BlogsComponent,
  // resolve: {
  //   blog:BlogDataResolver
  // }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

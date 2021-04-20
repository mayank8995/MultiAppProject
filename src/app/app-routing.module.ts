import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { NotesappComponent } from './components/notesapp/notesapp.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { SortingVisualizerComponent } from './components/sorting-visualizer/sorting-visualizer.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';


const routes: Routes = [
  {
    path:'quiz',
    component: QuizComponent,
  },
  {
    path:'book',
    component: BookSearchComponent,
    // outlet:'bookapp'
  },
  {
    path:'notes',
    component: NotesappComponent,
    // outlet:'notesapp'
  },
  {
    path: 'ticktactoe',
    component: TicTacToeComponent,
    // outlet:'crisscross'
  },
  {
    path: 'sorting-visualizer',
    component: SortingVisualizerComponent
  },
  {
    path:'blog',
    loadChildren: () => import('./submodules/blog/blog.module').then((m) => m.BlogModule),
    // outlet:'myblog'
  },
  {
    path:'grocery',
    loadChildren: () => import('./submodules/grocery/grocery.module').then((m) => m.GroceryModule),
    // outlet:'myblog'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

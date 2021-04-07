import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { NotesappComponent } from './components/notesapp/notesapp.component';
import { QuizComponent } from './components/quiz/quiz.component';


const routes: Routes = [
  {
    path:'quiz',
    component: QuizComponent,
  },
  {
    path:'book',
    component: BookSearchComponent,
    outlet:'bookapp'
  },
  {
    path:'notes',
    component: NotesappComponent,
    outlet:'notesapp'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

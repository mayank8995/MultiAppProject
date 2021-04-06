import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { RouterModule } from '@angular/router';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HtmlDecodePipe } from './pipes/html-decode.pipe';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    BookSearchComponent,
    HtmlDecodePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

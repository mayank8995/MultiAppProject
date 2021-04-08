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
import { NotesappComponent } from './components/notesapp/notesapp.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InmemorydataService } from './submodules/blog/services/inmemorydata.service';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    BookSearchComponent,
    HtmlDecodePipe,
    NotesappComponent,
    TicTacToeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(
    InmemorydataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function InMemoryDataService(InMemoryDataService: any, arg1: { dataEncapsulation: false; }): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}


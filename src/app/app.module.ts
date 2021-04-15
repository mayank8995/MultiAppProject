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
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers ,metaReducers} from './reducers';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule,
  ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: environment.production,
    // Register the ServiceWorker as soon as the app is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  }),
  StoreModule.forRoot(reducers, {
    metaReducers,
    runtimeChecks:
    {
    strictStateImmutability: true,
    strictActionImmutability: true,
    strictActionSerializability: true,
    strictStateSerializability: true
  }}),
  StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



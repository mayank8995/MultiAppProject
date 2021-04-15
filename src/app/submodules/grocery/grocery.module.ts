import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroceryRoutingModule } from './grocery-routing.module';
import { LoaderComponent } from './components/loader/loader.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { StoreModule } from '@ngrx/store';
import * as fromGrocery from './reducers';


@NgModule({
  declarations: [
    LoaderComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    GroceryRoutingModule,
    StoreModule.forFeature(fromGrocery.groceryFeatureKey, fromGrocery.reducers, { metaReducers: fromGrocery.metaReducers })
  ]
})
export class GroceryModule { }

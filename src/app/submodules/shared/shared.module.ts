import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SafePipe } from './pipes/safe.pipe';


@NgModule({
  declarations: [
    SafePipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [SafePipe]
})
export class SharedModule { }

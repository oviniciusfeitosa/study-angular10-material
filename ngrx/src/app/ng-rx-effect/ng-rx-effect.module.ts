import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgRxEffectRoutingModule } from './ng-rx-effect-routing.module';
import { MoviesComponent } from './movies/movies.component';


@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    NgRxEffectRoutingModule
  ]
})
export class NgRxEffectModule { }

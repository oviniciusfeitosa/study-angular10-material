import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgRxCounterRoutingModule } from "./ng-rx-counter-routing.module";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./my-counter/counter.reducer";
import { MoviesComponent } from "../ng-rx-effect/movies/movies.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgRxCounterRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
})
export class NgRxCounterModule {}

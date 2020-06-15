import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgRxEffectRoutingModule } from "./ng-rx-effect-routing.module";
import { MoviesComponent } from "./movies/movies.component";
import { EffectsModule } from "@ngrx/effects";
import { MoviesEffects } from "./movies/movies.effects";

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    NgRxEffectRoutingModule,
    EffectsModule.forFeature([MoviesEffects]),
  ],
})
export class NgRxEffectModule {}

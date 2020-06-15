import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { MoviesEffects } from "./movies/movies.effects";
import { NgRxEffectRoutingModule } from "./ng-rx-effect-routing.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgRxEffectRoutingModule,
    StoreModule.forRoot([]),
    // EffectsModule.forRoot([])
    EffectsModule.forFeature([MoviesEffects]),
  ],
})
export class NgRxEffectModule {}

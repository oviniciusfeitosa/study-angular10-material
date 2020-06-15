import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { Store, StoreModule } from "@ngrx/store";
import { MoviesEffects } from "./movies/movies.effects";
import { NgRxEffectRoutingModule } from "./ng-rx-effect-routing.module";
import { MoviesComponent } from "./movies/movies.component";
import { AuthEffects } from "./auth/auth.effects";

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    NgRxEffectRoutingModule,
    StoreModule.forRoot([]),
    EffectsModule.forFeature([MoviesEffects, AuthEffects]),
    // EffectsModule.forFeature([MoviesEffects]),
  ],
  providers: [Store],
})
export class NgRxEffectModule {}

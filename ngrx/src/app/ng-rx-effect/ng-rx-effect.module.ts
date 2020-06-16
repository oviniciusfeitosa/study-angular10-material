import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Store } from "@ngrx/store";
import { MoviesComponent } from "./movies/movies.component";
import { NgRxEffectRoutingModule } from "./ng-rx-effect-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MoviesService } from "./movies/movies.service";
import { EffectsModule } from "@ngrx/effects";
import { MovieEffects } from "./movies/movie.effects";

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    NgRxEffectRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([MovieEffects]),
  ],
  providers: [MoviesService],
})
export class NgRxEffectModule {}

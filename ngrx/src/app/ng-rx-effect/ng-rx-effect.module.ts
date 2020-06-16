import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Store } from "@ngrx/store";
import { MoviesComponent } from "./movies/movies.component";
import { NgRxEffectRoutingModule } from "./ng-rx-effect-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    NgRxEffectRoutingModule,
    ReactiveFormsModule,
    // EffectsModule.forFeature([MoviesEffects]),
  ],
  providers: [Store],
})
export class NgRxEffectModule {}

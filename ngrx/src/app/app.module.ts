import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GithubModule } from "./github/github.module";
import { MyCounterComponent } from "./ng-rx-counter/my-counter/my-counter.component";
import { MovieEffects } from "./ng-rx-effect/movies/movie.effects";
import { HomeComponent } from "./shared/home/home.component";
import { ToolbarComponent } from "./shared/toolbar/toolbar.component";
import { counterReducer } from "./ng-rx-counter/my-counter/counter.reducer";
import { movieReducer } from "./ng-rx-effect/movies/movie.reducer";

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    HomeComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    FlexLayoutModule,
    GithubModule,
    StoreModule.forRoot({ count: counterReducer, movies: movieReducer }),
    EffectsModule.forRoot([MovieEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

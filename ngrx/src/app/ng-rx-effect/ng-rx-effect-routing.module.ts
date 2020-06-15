import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MoviesComponent } from "./movies/movies.component";
import { LoginPageComponent } from "./auth/login-page.component";

const routes: Routes = [
  {
    path: "movies",
    component: MoviesComponent,
  },
  {
    path: "auth",
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgRxEffectRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "github",
    loadChildren: () =>
      import("./github/github.module").then((m) => m.GithubModule),
  },
  {
    path: "ngrx-counter",
    loadChildren: () =>
      import("./ng-rx-counter/ng-rx-counter.module").then(
        (m) => m.NgRxCounterModule
      ),
  },
  {
    path: "ngrx-effect",
    loadChildren: () =>
      import("./ng-rx-effect/ng-rx-effect.module").then(
        (m) => m.NgRxEffectModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

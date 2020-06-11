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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

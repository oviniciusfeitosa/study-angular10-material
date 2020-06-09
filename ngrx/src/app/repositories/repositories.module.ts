import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { RepositoriesRoutingModule } from "./repositories-routing.module";
import { RepositoriesComponent } from "./repositories.component";

@NgModule({
  declarations: [RepositoriesComponent],
  imports: [CommonModule, RepositoriesRoutingModule, MatListModule],
})
export class RepositoriesModule {}

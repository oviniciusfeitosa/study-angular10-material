import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GithubRoutingModule } from "./github-routing.module";
import { GithubComponent } from "./github.component";
import { MatListModule } from "@angular/material/list";
import { MatChipsModule } from "@angular/material/chips";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [GithubComponent],
  imports: [
    CommonModule,
    GithubRoutingModule,
    MatListModule,
    MatChipsModule,
    MatCardModule,
    MatTableModule,
  ],
})
export class GithubModule {}

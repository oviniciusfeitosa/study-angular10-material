import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GithubRoutingModule } from "./github-routing.module";
import { GithubComponent } from "./github.component";
import { MatListModule } from "@angular/material/list";
import { MatChipsModule } from "@angular/material/chips";

@NgModule({
  declarations: [GithubComponent],
  imports: [CommonModule, GithubRoutingModule, MatListModule, MatChipsModule],
})
export class GithubModule {}

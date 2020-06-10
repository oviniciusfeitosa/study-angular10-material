import { Component, OnInit } from "@angular/core";
import { GithubService } from "./github.service";
import { IRepo } from "./interface/IRepo";
import { Observable } from "rxjs";

@Component({
  selector: "app-github",
  templateUrl: "./github.component.html",
  styleUrls: ["./github.component.scss"],
})
export class GithubComponent implements OnInit {
  repos$: Observable<IRepo[]>;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.repos$ = this.githubService.getRepos("vinnyfs89");
  }
}

import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { RepositorioService } from "./repositorio-service";

interface Repository {
  name: string;
  descricao: string;
}

@Component({
  selector: "app-repositories",
  templateUrl: "./repositories.component.html",
  styleUrls: ["./repositories.component.scss"],
})
export class RepositoriesComponent implements OnInit {
  repos: Observable<[Repository]>;

  constructor(private repositorioService: RepositorioService) {}

  ngOnInit(): void {
    this.repos = this.repositorioService.getRepos();
  }
}

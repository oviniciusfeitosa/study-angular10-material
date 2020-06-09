import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-repositories",
  templateUrl: "./repositories.component.html",
  styleUrls: ["./repositories.component.scss"],
})
export class RepositoriesComponent implements OnInit {
  repositories$: Observable<[]>;
  constructor() {}

  ngOnInit(): void {
    Observable.bind(["Boots", "Clogs", "Loafers", "Moccasins", "Sneakers"]);
  }
}

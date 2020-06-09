import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RepositorioService {
  constructor(private http: HttpClient) {}

  getRepos(): Observable<any> {
    return this.http.get("https://api.github.com/repos/vinnyfs89/angular").pipe(
      map((repo: any) => ({
        name: repo.full_name,
        description: repo.description,
      })),
      tap(console.log)
    );
  }
}

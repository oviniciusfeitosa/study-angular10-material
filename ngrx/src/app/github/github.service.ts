import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { IRepo } from "./interface/IRepo";

@Injectable({
  providedIn: "root",
})
export class GithubService {
  httpHost = "https://api.github.com";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  public getRepos(user: string): Observable<IRepo[]> {
    const repoURL = `${this.httpHost}/users/${user}/repos`;
    return this.http.get<IRepo[]>(repoURL, this.httpOptions);
  }
}

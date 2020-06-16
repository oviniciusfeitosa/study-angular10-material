import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IMovie } from "./imovie";
import { map, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  host: string = "http://api.tvmaze.com/search/shows";

  getAll({ searchTerm }) {
    const searchURL = `${this.host}?q=${searchTerm}`;
    return this.http.get<IMovie[]>(searchURL, { responseType: "json" });
  }
}

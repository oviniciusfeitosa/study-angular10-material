import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  host: string = "http://api.tvmaze.com/search/shows";
  term: string = "";

  getAll() {
    return this.http.get(`${this.host}?q=${this.term}`);
  }
}

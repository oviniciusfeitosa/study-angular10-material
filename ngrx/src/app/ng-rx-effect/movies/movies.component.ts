import { Component, OnInit } from "@angular/core";
import { MoviesService } from "./movies.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { loadMoviesAction } from "./movie.actions";
import { FormControl } from "@angular/forms";

interface Movie {
  name: string;
}

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]> = this.store.select((state) => state.movies);
  searchTearm = new FormControl("");
  constructor(private store: Store<{ movies: Movie[] }>) {}

  ngOnInit() {}

  searchMovie() {
    if (!this.searchTearm.value) {
      return;
    }
    this.store.dispatch(
      loadMoviesAction({ searchTerm: this.searchTearm.value })
    );
  }
}

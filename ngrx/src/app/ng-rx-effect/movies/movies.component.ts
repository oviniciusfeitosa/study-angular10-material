import { Component, OnInit } from "@angular/core";
import { MoviesService } from "./movies.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { loadMoviesAction } from "./movie.actions";
import { FormControl } from "@angular/forms";
import { IMovie } from "./imovie";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<IMovie[]> = this.store.select((state) => {
    return state?.movies?.movies;
  });

  searchTerm = new FormControl("");

  constructor(private store: Store<{ movies: IMovie[] }>) {}

  ngOnInit() {
    this.searchMovie();
  }

  searchMovie() {
    // if (!this.searchTerm.value) {
    //   return;
    // }
    this.store.dispatch(
      loadMoviesAction({ searchTerm: this.searchTerm.value })
    );
  }
}

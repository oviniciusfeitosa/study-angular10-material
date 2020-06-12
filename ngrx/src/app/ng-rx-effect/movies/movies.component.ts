import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieService.getAll().subscribe((movies) => (this.movies = movies));
  }
}

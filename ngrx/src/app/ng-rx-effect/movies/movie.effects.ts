import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MoviesService } from "./movies.service";
import { mergeMap, map, catchError } from "rxjs/operators";
import { EMPTY, of } from "rxjs";
import {
  loadMoviesAction,
  loadedMoviesSuccessAction,
  loadedMoviesErrorAction,
} from "./movie.actions";

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMoviesAction),
      mergeMap(() =>
        this.moviesService.getAll().pipe(
          map((payload) => loadedMoviesSuccessAction({ payload })),
          catchError((payload) => of(loadedMoviesErrorAction({ payload })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}

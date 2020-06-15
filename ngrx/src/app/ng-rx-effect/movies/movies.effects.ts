import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MoviesService } from "./movies.service";
import { mergeMap, map, catchError } from "rxjs/operators";
import { EMPTY, of } from "rxjs";

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Movies Page] Load Movies"),
      mergeMap(() =>
        this.moviesService.getAll().pipe(
          map((movies) => ({
            type: "[Movies API] Movies Loaded Success",
            payload: movies,
          })),
          catchError(() => of({ type: "[Movies API] Movies Loaded Error" }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}

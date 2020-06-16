import { Action, createReducer, on } from "@ngrx/store";
import * as MovieActions from "./movie.actions";
import { IMovie } from "./imovie";

export const movieFeatureKey = "movie";

export interface State {
  movies: IMovie[];
}

export const initialState: State = {
  movies: [],
};

export const movieReducer = createReducer(
  initialState,
  on(MovieActions.loadMoviesAction, () => ({
    movies: [],
  })),
  on(MovieActions.loadedMoviesSuccessAction, (state, { payload }) => ({
    movies: payload,
  }))
);

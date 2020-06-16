import { createAction, props } from "@ngrx/store";

export const loadMoviesAction = createAction(
  "[Movie] Load Movies",
  props<{ searchTerm: string }>()
);
export const loadedMoviesSuccessAction = createAction(
  "[Movie] Movies Loaded Success",
  props<{ payload: any }>()
);
export const loadedMoviesErrorAction = createAction(
  "[Movie] Movies Loaded Error",
  props<{ payload: any }>()
);

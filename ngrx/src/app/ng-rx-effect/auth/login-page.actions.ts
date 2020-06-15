import { createAction, props } from "@ngrx/store";
import { ICredentials } from "./icredentials";

export const login = createAction(
  "[Login Page] Login",
  props<{ credentials: ICredentials }>()
);

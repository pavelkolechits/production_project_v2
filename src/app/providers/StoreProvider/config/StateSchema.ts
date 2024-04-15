import { UserSchema } from "entities/User";
import { LoginSchema } from "feature/AuthByUsername/model/types/loginSchema";

export interface StateSchema {

    user: UserSchema;
    loginForm: LoginSchema;
}
  
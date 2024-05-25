import {
    EnhancedStore, 
    Reducer,
    ReducersMapObject,
    StateFromReducersMapObject,
    UnknownAction,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ProfileSchema } from "entities/Profile/model/types/profile";
import { UserSchema } from "entities/User";
import { LoginSchema } from "feature/AuthByUsername/model/types/loginSchema";

export interface StateSchema {
    user: UserSchema;
    loginForm?: LoginSchema;
    profile?: ProfileSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
    add: (key: StateSchemaKeys, reducer: Reducer) => void;
    remove: (key: StateSchemaKeys) => void;
  }
  
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
  }

export interface ThunkExtraArgs {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StateSchema
}
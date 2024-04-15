import {
    EnhancedStore, 
    Reducer,
    ReducersMapObject,
    StateFromReducersMapObject,
    UnknownAction,
} from "@reduxjs/toolkit";
import { UserSchema } from "entities/User";
import { LoginSchema } from "feature/AuthByUsername/model/types/loginSchema";

export interface StateSchema {
    user: UserSchema;
    loginForm?: LoginSchema;
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
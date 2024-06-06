import {
    EnhancedStore, 
    Reducer,
    ReducersMapObject,
    StateFromReducersMapObject,
    UnknownAction,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/Article";
import { UserSchema } from "entities/User";
import { AddNewCommentSchema } from "feature/AddNewComment/model/types/addNewComment";
import { LoginSchema } from "feature/AuthByUsername/model/types/loginSchema";
import { ProfileSchema } from "feature/EditableProfileCard";
import { ArticleDetailsCommentsSchema } from "pages/ArticleDetailsPage";

export interface StateSchema {
    user: UserSchema;
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addNewComment?: AddNewCommentSchema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
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
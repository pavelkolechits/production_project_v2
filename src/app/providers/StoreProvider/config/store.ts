import { Reducer, ReducersMapObject, StateFromReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { userReducer } from 'entities/User'
import { loginReducer } from 'feature/AuthByUsername/model/slices/loginSlice'
import { createReducerManager } from './reducerManager'
import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import { $api } from 'shared/api/api'



export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
    }
    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: buildGetDefaultMiddleware => buildGetDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                }
            }
        })
    })
    //@ts-ignore
    store.reducerManager = reducerManager
    return store
}


export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { userReducer } from 'entities/User'



export function createReduxStore() {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer
    }
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__
    })
}
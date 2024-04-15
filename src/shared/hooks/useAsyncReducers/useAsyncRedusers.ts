import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager, StateSchemaKeys } from "app/providers/StoreProvider/config/StateSchema";
import { useEffect } from "react";
import { useStore } from "react-redux";
import { useAppDispatch } from "../useAppDispatch/useAppDispatch";

export type ReducerList = {
    [name in StateSchemaKeys]?: Reducer
}

interface UseAsyncReducersProps {
        reducers: ReducerList;
        removeAfterUnmount?: boolean;
    
}

export function useAsyncRedusers (props: UseAsyncReducersProps) {

    const {reducers, removeAfterUnmount} = props
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch()

    useEffect(() => {
        const mountedReducer = store.reducerManager.getReducerMap();
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducer[name as StateSchemaKeys];
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKeys, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKeys);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
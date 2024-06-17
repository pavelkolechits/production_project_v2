import { EntityState, PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Id } from "@reduxjs/toolkit/dist/tsHelpers";
import { StateSchema } from "app/providers/StoreProvider";
import { Article } from "entities/Article/model/types/article";
import { ArticlesPageSchema } from "../types/articlesPageSchema";
import { ArticleView } from "entities/Article";
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/consts/localStorage'
import { fetchArticleList } from "../services/fetchArticlesList/fetchArticlesList";






const articlesAdapter = createEntityAdapter<Article, Id<string | number>>({
    selectId: (article) => article.id,
});
export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);



const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        entities: {},
        ids: [],
        view: ArticleView.TILE
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(
                ARTICLES_VIEW_LOCALSTORAGE_KEY,
                action.payload,
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});
export const {
    actions: articlesPageAction,
    reducer: articlesPageReducer,
} = articlesPageSlice;
import {
    EntityState, PayloadAction, createEntityAdapter, createSlice,
} from '@reduxjs/toolkit';
import { Id } from '@reduxjs/toolkit/dist/tsHelpers';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article/model/types/article';
import { fetchArticleList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';


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
        isLoading: false,
        error: undefined,

    }),
    reducers: {
        // setView: (state, action: PayloadAction<ArticleView>) => {
        //     state.view = action.payload;
        //     localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        // },
        // initState: (state) => {
        //     const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
        //     state.view = view;
        //     state.limit = ArticleView.SMALL ? 9 : 4;
        //     state._inited = true;
        // },
        // setPage: (state, action: PayloadAction<number>) => {
        //     state.page = action.payload;
        // },
        // setSearch: (state, action: PayloadAction<string>) => {
        //     state.search = action.payload;
        // },
        // setOrder: (state, action: PayloadAction<SortOrder>) => {
        //     state.order = action.payload;
        // },
        // setSort: (state, action: PayloadAction<ArticleSortField>) => {
        //     state.sort = action.payload;
        // },
        // setType: (state, action: PayloadAction<ArticleType>) => {
        //     state.type = action.payload;
        // },

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
                // state.hasMore = action.payload.length >= state.limit;
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
    },
});
export const {
    actions: articlesPageAction,
    reducer: articlesPageReducer,
} = articlesPageSlice;
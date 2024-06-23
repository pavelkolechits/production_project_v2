import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageIsLoading,
    getArticlesPageHasMore,
    getArticlesPageNum
} from '../../selectors/articlesPageSelectors';
import { articlesPageAction } from '../../slices/articlesPageSlice';


export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlePage/fetchNextArticlePage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const isLoading = getArticlesPageIsLoading(getState());
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        if (hasMore && !isLoading) {
            dispatch(articlesPageAction.setPage(page + 1));
            dispatch(fetchArticlesList({
            }));
        }
    },
);
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article/model/types/article';
import {
    getArticlesPageNum,
    getArticlesPageLimit,
    getArticlesPageSort,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageType
} from '../../selectors/articlesPageSelectors';
import { addQueryParams } from 'shared/lib/addQueryParams/addQueryParams';


export interface FetchArticleListProps {
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticleListProps,
    ThunkConfig<string>
>(
    'articlePage/fetchArticleList',
    async (props, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const page = getArticlesPageNum(getState());
        const limit = getArticlesPageLimit(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());
        const type = getArticlesPageType(getState());
        try {
            addQueryParams({ sort, order, search });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                },
            });
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
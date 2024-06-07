import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article/model/types/article';
// import { Article, ArticleType } from 'entities/Article';
// import { addQueryParams } from 'shared/lib/addQueryParams/addQueryParams';
// import {
//     getArticlePageLimit,
//     getArticlePageNum,
//     getArticlePageOrder,
//     getArticlePageSearch,
//     getArticlePageSort,
//     getArticlePageType,
// } from '../selectors/articlePageSelectors';

export interface FetchArticleListProps {
    replace?:boolean
}

export const fetchArticleList = createAsyncThunk<
Article[],
FetchArticleListProps,
    ThunkConfig<string>
    >(
        'articlePage/fetchArticleList',
        async (props, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            // const page = getArticlePageNum(getState());
            // const limit = getArticlePageLimit(getState());
            // const sort = getArticlePageSort(getState());
            // const order = getArticlePageOrder(getState());
            // const search = getArticlePageSearch(getState());
            // const type = getArticlePageType(getState());
            try {
                // addQueryParams({ sort, order, search });
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
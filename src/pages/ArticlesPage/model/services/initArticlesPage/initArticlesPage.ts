import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types/sort';
import { ArticleSortField } from 'entities/Article';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageAction } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';


export interface FetchArticleListProps {
    page?: number;
}

export const initArticlePage = createAsyncThunk<
void,
URLSearchParams,
    ThunkConfig<string>
    >(
        'articlePage/initArticlePage',
        async (searchParams, thunkApi) => {
            const {
                extra, rejectWithValue, getState, dispatch,
            } = thunkApi;
            const inited = getArticlesPageInited(getState());
            if (!inited) {
                const orderFromUrl = searchParams.get('order') as SortOrder;
                const sortFromUrl = searchParams.get('sort') as ArticleSortField;
                const searchFromUrl = searchParams.get('search');
                if (orderFromUrl) {
                    dispatch(articlesPageAction.setOrder(orderFromUrl));
                }
                if (sortFromUrl) {
                    dispatch(articlesPageAction.setSort(sortFromUrl));
                }
                if (searchFromUrl) {
                    dispatch(articlesPageAction.setSearch(searchFromUrl));
                }
                dispatch(articlesPageAction.initState());
                dispatch(fetchArticlesList({
                }));
            }
        },
    );
import { ArticleView, ArticleSortField, ArticleType } from "entities/Article";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDispatch";
import { SortOrder } from "shared/types/sort";
import {
    getArticlesPageView,
    getArticlesPageSort,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageType
} from "../model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "../model/services/fetchArticlesList/fetchArticlesList";
import { articlesPageAction } from "../model/slices/articlesPageSlice";
import { useDebounce } from "shared/hooks/useDebounce/useDebounce";


export function useArticleFilters() {
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);
    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);
    const debouncedFetchData = useDebounce(fetchData, 500);
    const onViewClick = useCallback((view: ArticleView) => {
        dispatch(articlesPageAction.setView(view));
        dispatch(articlesPageAction.setPage(1));
    }, [dispatch]);
    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageAction.setSort(newSort));
        dispatch(articlesPageAction.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);
    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageAction.setOrder(newOrder));
        dispatch(articlesPageAction.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);
    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageAction.setSearch(search));
        dispatch(articlesPageAction.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);
    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlesPageAction.setType(value as ArticleType));
        dispatch(articlesPageAction.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);
    return {
        view, search, sort, order, type, onChangeOrder, onChangeSearch, onChangeSort, onChangeType, onViewClick,
    };
}
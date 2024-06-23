import { ArticleList, ArticleView } from "entities/Article"
import { useCallback, useEffect } from "react"
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDispatch"
import { VStack } from "shared/ui/Stack/VStack/VStack"
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList"
import { articlesPageAction, articlesPageReducer, getArticles } from "../../model/slices/articlesPageSlice"
import { useAsyncRedusers } from "shared/hooks/useAsyncReducers/useAsyncRedusers"
import { useSelector } from "react-redux"
import { Page } from "widgets/Page"
import { classNames } from "shared/helpers/classNames/classNames"
import cls from './ArticlesPage.module.scss'
import { ArticleViewSelector } from "feature/ArticleViewSelector"
import { getArticlesPageView } from "../../model/selectors/articlesPageSelectors"
import { ArticlePageFilters } from "widgets/ArticlePageFilters"
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList"
import { fetchNextArticlePage } from "pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage"
import { initArticlePage } from "pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage"
import { useSearchParams } from "react-router-dom"




export interface ArticlesPageProps {
    className?: string
}


const ArticlesPage = (props: ArticlesPageProps) => {
    const {className} = props

    const dispatch = useAppDispatch();
    const inited = useSelector(getArticlesPageView);
    const [serchParams] = useSearchParams();

    useEffect(() => {
        dispatch(initArticlePage(serchParams));
    }, [dispatch, inited, serchParams]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useAsyncRedusers({reducers: {articlesPage: articlesPageReducer}})

    return (
        <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlePage, {}, [className])}>
            <ArticlePageFilters />
            <ArticleInfiniteList />
        </Page>
    )
}

export default ArticlesPage
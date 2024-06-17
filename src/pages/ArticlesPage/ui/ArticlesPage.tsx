import { ArticleList, ArticleView } from "entities/Article"
import { useCallback, useEffect } from "react"
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDispatch"
import { VStack } from "shared/ui/Stack/VStack/VStack"
import { fetchArticleList } from "../model/services/fetchArticlesList/fetchArticlesList"
import { articlesPageAction, articlesPageReducer, getArticles } from "../model/slices/articlesPageSlice"
import { useAsyncRedusers } from "shared/hooks/useAsyncReducers/useAsyncRedusers"
import { useSelector } from "react-redux"
import { Page } from "widgets/Page"
import { classNames } from "shared/helpers/classNames/classNames"
import cls from './ArticlesPage.module.scss'
import { ArticleViewSelector } from "feature/ArticleViewSelector"
import { getArticlesPageView } from "../model/selectors/articlesPageSelectors"




export interface ArticlesPageProps {
    className?: string
}


const ArticlesPage = (props: ArticlesPageProps) => {
    const {className} = props

    useAsyncRedusers({ reducers: { articlesPage: articlesPageReducer } })

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchArticleList({ replace: false }))
    }, [dispatch])

    const article = useSelector(getArticles.selectAll)
    const view = useSelector(getArticlesPageView)
    
    const onViewClick = useCallback((view: ArticleView) => {
        dispatch(articlesPageAction.setView(view));
    }, [dispatch]);

    return (
        <Page className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleViewSelector view={view} onViewClick={onViewClick}/>
            <VStack>
                <ArticleList view={view} articles={article} />
            </VStack>
        </Page>
    )
}

export default ArticlesPage
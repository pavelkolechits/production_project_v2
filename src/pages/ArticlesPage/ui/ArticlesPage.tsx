import { ArticleList } from "entities/Article"
import { useEffect } from "react"
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDispatch"
import { VStack } from "shared/ui/Stack/VStack/VStack"
import { fetchArticleList } from "../model/services/fetchArticlesList/fetchArticlesList"
import { articlesPageAction, articlesPageReducer, getArticles } from "../model/slices/articlesPageSlice"
import { useAsyncRedusers } from "shared/hooks/useAsyncReducers/useAsyncRedusers"
import { useSelector } from "react-redux"
import { Page } from "widgets/Page"
import { classNames } from "shared/helpers/classNames/classNames"
import cls from './ArticlesPage.module.scss'




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
    return (
        <Page className={classNames(cls.ArticlesPage, {}, [className])}>
            <VStack>
                <ArticleList articles={article} />
            </VStack>
        </Page>
    )
}

export default ArticlesPage
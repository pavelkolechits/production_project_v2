import { ArticleList } from "entities/Article";
import { 
    getArticlesPageIsLoading,
    getArticlesPageView,
    getArticlesPageError,
    getArticlesPageInited 
} from "../../model/selectors/articlesPageSelectors";
import { getArticles } from "pages/ArticlesPage/model/slices/articlesPageSlice";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDispatch";
import { Text } from "shared/ui/Text/Text"; 


interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = ({ className }: ArticleInfiniteListProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const inited = useSelector(getArticlesPageInited);
    const [serchParams] = useSearchParams();
    const { t } = useTranslation();

    if (error) {
        return <Text text={t('Ошибка при загрузке статей')} />;
    }
    return (
        <ArticleList className={className} isLoading={isLoading} view={view} articles={articles} />

    );

};
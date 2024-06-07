import { Article } from "entities/Article/model/types/article";
import { HTMLAttributeAnchorTarget } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/helpers/classNames/classNames";
import cls from './ArticleList.module.scss'
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";


interface ArticleListProps {
    className?: string
    articles: Article[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
}

// const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
//     .fill(0)
//     .map((item, index) => (
//         // eslint-disable-next-line react/no-array-index-key
//         <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
//     ));

export const ArticleList = (props: ArticleListProps) => {
    const { t } = useTranslation();
    const {
        className, articles, isLoading,  target,
    } = props;

    return (

        <div
            className={classNames(cls.ArticleList, {}, [
                className,
            ])}
            data-testid="ArticleList"
        >
            {articles.map((item) => (
                <ArticleListItem
                    article={item}
                    target={target}
                    key={item.id}
                    className={cls.card}
                />
            ))}
        </div>

    );
};

import cls from './ArticleListItem.module.scss';
import EyeIcon from '../../../../shared/assets/icons/eye.svg';
import { ArticleBlockType } from 'entities/Article/model/consts/consts';
import { Article, ArticleTextBlock } from 'entities/Article/model/types/article';
import { HTMLAttributeAnchorTarget, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getRouteArticleDetails } from 'shared/consts/router';
import { classNames } from 'shared/helpers/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Text } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { ArticleView } from '../../model/consts/consts';


export interface ArticleListItemProps {
    className?: string;
    article: Article;
    target?: HTMLAttributeAnchorTarget;
    view: ArticleView
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { article, className, view = ArticleView.TILE } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const onOpenArticle = useCallback(() => {
        navigate(getRouteArticleDetails(article.id));
    }, [article.id, navigate]);
    if (view === ArticleView.LIST) {
        let textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticlleListItem, {}, [className, cls[view]])}>
                <Card  theme='outlined' className={cls.card}>
                    <div className={cls.header}>
                        <Avatar alt="/" size={30} src={article?.user?.avatar} />
                        <Text text={article?.user?.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    <Text className={cls.types} text={article.type.join(',')} />
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme='outline'>{t('Читать далее...')}</Button>
                        <Text text={String(article.views)} className={cls.views} />
                        <Icon Svg={EyeIcon} />
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticlleListItem, {}, [className])}>
            <Card theme='outlined' onClick={onOpenArticle} className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img className={cls.img} src={article.img} alt={article.title} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text className={cls.types} text={article.type.join(',')} />
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={EyeIcon} />
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    );
};
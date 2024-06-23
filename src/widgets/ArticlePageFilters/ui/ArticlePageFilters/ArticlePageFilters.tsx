
import { ArticleSortSelector } from 'feature/ArticleSortSelector/ArticleSortSelector';
import { ArticleTypeTabs } from 'feature/ArticleTypeTabs/ArticleTypeTabs';
import { ArticleViewSelector } from 'feature/ArticleViewSelector';
import { useArticleFilters } from 'pages/ArticlesPage/hoocs/useArticleFilters';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/helpers/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import cls from './ArticlePageFilters.module.scss';

interface ArticlePageFiltersProps {
    className?: string
}

export const ArticlePageFilters = ({ className }: ArticlePageFiltersProps) => {
    const { t } = useTranslation();
    const {
        search, sort, view, onChangeOrder, onChangeSearch, onChangeSort, onChangeType, onViewClick, order, type,
    } = useArticleFilters();
    return (
        <div className={classNames(cls.ArticlePageFilter, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    onChangeOrder={onChangeOrder}
                    onChangeSortField={onChangeSort}
                    order={order}
                    sort={sort}
                />
                <ArticleViewSelector view={view} onViewClick={onViewClick} />
            </div>
            <Card className={cls.search}>
                <Input onChange={onChangeSearch} value={search} placeholder={t('Поиск')} />
            </Card>
            <ArticleTypeTabs className={cls.tabs} onChangeType={onChangeType} value={type} />

        </div>
    );
};
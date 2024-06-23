import { EntityState } from '@reduxjs/toolkit';
import { Id } from '@reduxjs/toolkit/dist/tsHelpers';
import { ArticleSortField, ArticleView } from 'entities/Article';
import { ArticleType } from 'entities/Article';
import { Article } from 'entities/Article';
import { SortOrder } from 'shared/types/sort';

export interface ArticlesPageSchema extends EntityState<Article, Id<string | number>> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;
    page: number;
    limit: number;
    hasMore: boolean;
    _inited: boolean;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
}

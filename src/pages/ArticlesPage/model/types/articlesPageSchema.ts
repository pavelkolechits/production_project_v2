import { EntityState } from '@reduxjs/toolkit';
import { Id } from '@reduxjs/toolkit/dist/tsHelpers';
import { Article } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article, Id<string | number>> {
    isLoading?: boolean;
    error?: string;
}
import { EntityId, EntityState } from '@reduxjs/toolkit';
import { Id } from '@reduxjs/toolkit/dist/tsHelpers';
import { Comment } from 'entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment, Id<string | number>> {
    isLoading?: boolean;
    error?: string;
}
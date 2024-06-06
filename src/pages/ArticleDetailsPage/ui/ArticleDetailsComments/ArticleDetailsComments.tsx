import { CommentList } from "entities/Comment/ui/CommentList/CommentList";
import AddNewComment from "feature/AddNewComment/ui/AddNewComment";
import {
    addCommentForArticle
} from "pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useEffect, useCallback, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/helpers/classNames/classNames";
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDispatch";
import { Loader } from "shared/ui/Loader/Loader/Loader";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import { Text } from "shared/ui/Text/Text";
import { getArticleDetailsComments } from "../../model/slices/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = (props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const comments = useSelector(getArticleDetailsComments.selectAll);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );
    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>


            <Text
                
                title={t('Комментарии')}

            />
            <Suspense fallback={<Loader />}>
                <AddNewComment onSendComment={onSendComment} />
            </Suspense>
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
};
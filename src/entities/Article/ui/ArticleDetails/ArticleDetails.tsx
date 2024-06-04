import {
    getArticleDetailsIsLoading,
    getArticleDetailsError,
    getArticleDetailsData
} from "entities/Article/model/selectors/articleDetailsSelector";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slices/articleDetailsSlice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDispatch";
import { useAsyncRedusers } from "shared/hooks/useAsyncReducers/useAsyncRedusers";
import { PageLoader } from "shared/ui/Loader/PageLoader/PageLoader";
import { Text } from "shared/ui/Text/Text";
import { useParams } from "react-router-dom";
import { ArticleDetailsSkeleton } from "./ArticleDetailsSkeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Icon } from "shared/ui/Icon/Icon";
import { HStack } from "shared/ui/Stack/HStack/HStack";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import { renderArticleBlock } from "./RenderBlock";
import cls from './ArticleDetails.module.scss'
import EyeIcon from 'shared/assets/icons/eye.svg'
import DataIcon from 'shared/assets/icons/calendar.svg'


interface ArticleDetailsProps {
    className?: string;
    id: string;
}

export const ArticleDetails = (props: ArticleDetailsProps) => {

    const { id, className } = props

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData)

    useAsyncRedusers({ reducers: { articleDetails: articleDetailsReducer }, removeAfterUnmount: true })

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = <ArticleDetailsSkeleton />
    } else if (error) {
        content = (


            <Text title={t('Произошла ошибка при загрузке статьи.')} />


        );
    } else {
        content = ( <>
            <HStack justify="center" max className={cls.avatarWrapper}>
                <Avatar size={200} src={article?.img} className={cls.avatar} />
            </HStack>
            <VStack gap="4" max data-testid="ArticleDetails.Info">
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size='size_l'
                />
                <HStack gap="8" className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </HStack>
                <HStack gap="8" className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={DataIcon} />
                    <Text text={article?.createdAt} />
                </HStack>
            </VStack>
            {article?.blocks.map(renderArticleBlock)}
        </>);
    }

    return (
        <div>
            {content}
        </div>
    )
}
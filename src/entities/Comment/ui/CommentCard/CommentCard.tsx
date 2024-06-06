import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from 'shared/consts/router';
import { classNames } from 'shared/helpers/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { Text } from 'shared/ui/Text/Text';
import { CommentCardSkeleton } from './CommentCardSkeleton';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {

    if (isLoading) {
        return <CommentCardSkeleton className={className}/>
    }
    if (!comment) {
        return null;
    }
    return (

        <VStack className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={getRouteProfile(comment?.user.id)} className={cls.header}>
                {comment?.user.avatar
                    ? (
                        <Avatar
                            src={comment?.user.avatar}
                            alt=""
                            size={30}
                        />
                    )
                    : null}
                <Text className={cls.username} text={comment?.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment?.text} />
        </VStack>


    );
};
import { classNames } from "shared/helpers/classNames/classNames";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import cls from './CommentCard.module.scss'

export  interface CommentCardSkeletonProps {
    className?: string
}

export const CommentCardSkeleton = (props: CommentCardSkeletonProps) => {
    const { className } = props
    return (
        <VStack
            data-testid="CommentCard.Loading"
            gap="8"
            max
            className={classNames(cls.CommentCard, {}, [
                className,
                cls.loading,
            ])}
        >
            <div className={cls.header}>
                <Skeleton width={30} height={30} borderRadius="50%" />
                <Skeleton
                    height={16}
                    width={100}
                    className={cls.username}
                />
            </div>
            <Skeleton className={cls.text} width="100%" height={50} />
        </VStack>
    );
}
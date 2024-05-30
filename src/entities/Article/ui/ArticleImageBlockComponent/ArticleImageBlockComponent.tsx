import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/helpers/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = ({ className, block }: ArticleImageBlockComponentProps) => {
    return (
        <div
            className={classNames(cls.ArticleImageBlockComponent, {}, [
                className,
            ])}
        >
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && (


                <Text
                    text={block.title}
                    align='center'
                />
            )}


        </div>
    );
};
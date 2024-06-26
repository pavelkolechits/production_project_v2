import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/helpers/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = ({ className, block }: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation();
    return (
        <div
            className={classNames(cls.ArticleTextBlockComponent, {}, [
                className,
            ])}
        >
            {block.title && (


                <Text
                    title={block.title}
                    className={cls.title}
                />
            )}


            {block.paragraphs.map((paragraph, index) => (


                <Text
                    key={paragraph}
                    text={paragraph}
                    className={cls.paragraph}
                />

            ))}
        </div>
    );
};
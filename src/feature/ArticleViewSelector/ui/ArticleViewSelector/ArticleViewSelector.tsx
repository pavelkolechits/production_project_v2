import TiledIcon from 'shared/assets/icons/tiled.svg'
import ListIcon from 'shared/assets/icons/list.svg'
import cls from './ArticleViewSelector.module.scss'
import { classNames } from 'shared/helpers/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from 'entities/Article';
interface ArticleViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        icon: TiledIcon,
        view: ArticleView.TILE
    },
    {
        icon: ListIcon,
        view: ArticleView.LIST,
    },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { className, onViewClick, view } = props;
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
       
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    className={cls.btn}
                    onClick={onClick(viewType.view)}
                    theme='clear'
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])}
                    />
                </Button>
            ))}
        </div>
        

    );
};
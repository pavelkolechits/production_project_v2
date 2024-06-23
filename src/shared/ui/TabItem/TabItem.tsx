import { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/helpers/classNames/classNames';
import cls from './TabItem.module.scss';
import { Card } from '../Card/Card';

export interface TabItem {
    value: string;
    content: ReactNode
}

interface TabItemProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}


export const Tabs = (props: TabItemProps) => {
    const {
        className, tabs, onTabClick, value,
    } = props;
    const onClickHandler = useCallback((tab: TabItem) => {
        return () => {
            onTabClick(tab);
        };
    }, [onTabClick]);
    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    onClick={onClickHandler(tab)}
                    theme={tab.value === value ? 'normal' : 'outlined'}
                    key={tab.value}
                    className={cls.tab}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
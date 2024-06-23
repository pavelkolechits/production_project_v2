
import { ArticleSortField } from 'entities/Article';
import { useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/helpers/classNames/classNames';
import { SortOrder } from 'shared/types/sort';
import { SelectOptions, Select } from 'shared/ui/Select/Select';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSortField: (newField: ArticleSortField) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const {
        className, sort, order, onChangeOrder, onChangeSortField,
    } = props;
    const { t } = useTranslation('article');
    const orderOptions = useMemo<SelectOptions[]>(() => [
        { value: 'asc', content: t('возрастанию') },
        { value: 'desc', content: t('убыванию') },
    ], [t]);
    const sortFildsOptions = useMemo<SelectOptions[]>(() => [
        { value: ArticleSortField.CREATED, content: t('дате создания') },
        { value: ArticleSortField.TITLE, content: t('названию') },
        { value: ArticleSortField.VIEWS, content: t('количеству просмотров') },
    ], [t]);
    const onChangeSortHandler = useCallback((newSort: string) => {
        onChangeSortField(newSort as ArticleSortField);
    }, [onChangeSortField]);
    const onChangeOrderHandler = useCallback((newSort: string) => {
        onChangeOrder(newSort as SortOrder);
    }, [onChangeOrder]);
    return (

        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                value={sort}
                onChangeValue={onChangeSortHandler}
                options={sortFildsOptions}
                label={t('Сортировать по')}
            />
            <Select
                value={order}
                onChangeValue={onChangeOrderHandler}
                options={orderOptions}
                label={t('по')}
                className={cls.order}
            />
        </div>


    );
};
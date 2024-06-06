
import cls from './AddNewComment.module.scss';
import { addNewCommentAction, addNewCommentReducer } from '../model/slices/addNewCommentSlice';
import { useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/helpers/classNames/classNames';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getAddNewCommentText, getAddNewCommentError } from '../model/selectors/addNewCommentSelectors';
import { useAsyncRedusers } from 'shared/hooks/useAsyncReducers/useAsyncRedusers';

interface AddNewCommentProps {
    className?: string;
    onSendComment: (text: string) => void
}


const AddNewComment = (props: AddNewCommentProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddNewCommentText);
    const error = useSelector(getAddNewCommentError);
    const onChangeValue = useCallback((value: string) => {
        dispatch(addNewCommentAction.setText(value));
    }, [dispatch]);
    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onChangeValue('');
    }, [onChangeValue, onSendComment, text]);

    useAsyncRedusers({reducers: {
        addNewComment: addNewCommentReducer
    }})

    return (

        <div className={classNames(cls.AddNewComment, {}, [className])}>
            <Input
                className={cls.input}
                onChange={onChangeValue}
                value={text}
                placeholder={t('Текст комментария')}
            />
            <Button
                onClick={onSendHandler}
                theme='outline'
            >
                {t('Отправить')}

            </Button>
        </div>




    );
};
export default memo(AddNewComment);
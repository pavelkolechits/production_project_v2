import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button/Button"
import cls from './LoginForm.module.scss'
import { Input } from "shared/ui/Input/Input"
import { classNames } from "shared/helpers/classNames/classNames"
import { useSelector } from "react-redux"
import { useCallback } from "react"
import { getLoginUsername } from '../../model/selectors/getLoginData';
import { getLoginPassword } from '../../model/selectors/getLoginData';
import { getLoginError } from '../../model/selectors/getLoginData';
import { getLoginIsLoading } from '../../model/selectors/getLoginData';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDispatch"
import { loginByUsername } from "../../model/servises/loginByUsername/loginByUsername"
import { userActions, userReducer } from "entities/User"



interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

export const LoginForm  = (props: LoginFormProps) => {
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        await dispatch(loginByUsername({ username, password }));
        // if (result.meta.requestStatus === 'fulfilled') {
        //     onSuccess.?();
        // 
    }, [username, password, dispatch]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                placeholder={t('Введите имя пользователя')}
                className={cls.input}
                type="text"
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                placeholder={t('Введите пароль')}
                className={cls.input}
                type="text"
                onChange={onChangePassword}
                value={password}
            />
            <Button
                disabled={isLoading}
                onClick={onLoginClick}
                theme='outline'
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    )
}

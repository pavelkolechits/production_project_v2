import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button/Button"
import cls from './LoginForm.module.scss'
import { Input } from "shared/ui/Input/Input"
import { classNames } from "shared/helpers/classNames/classNames"
import { useSelector, useStore } from "react-redux"
import { KeyboardEventHandler, memo, useCallback, useEffect } from "react"
import { getLoginUsername } from '../../model/selectors/getLoginData';
import { getLoginPassword } from '../../model/selectors/getLoginData';
import { getLoginError } from '../../model/selectors/getLoginData';
import { getLoginIsLoading } from '../../model/selectors/getLoginData';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDispatch"
import { loginByUsername } from "../../model/servises/loginByUsername/loginByUsername"
import { userActions, userReducer } from "entities/User"
import { ReduxStoreWithManager } from "app/providers/StoreProvider/config/StateSchema"
import { useAsyncRedusers } from "shared/hooks/useAsyncReducers/useAsyncRedusers"
import { Text } from "shared/ui/Text/Text" 



export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const LoginForm  = (props: LoginFormProps) => {
    const store = useStore() as ReduxStoreWithManager
    const { className, onSuccess } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    useAsyncRedusers({reducers:{loginForm: loginReducer}, removeAfterUnmount: true})

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
      const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess?.()
        }
    }, [username, password, dispatch, onSuccess]);

    const onLoginEnter = (e: KeyboardEvent) => {
        if(e.key === 'Enter') {
            onLoginClick()
        }
    }

    document.addEventListener('keydown', onLoginEnter)

    useEffect(() => {
        return () => {
            document.removeEventListener('keydown', onLoginEnter)
        }
    })

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')}/>
             {error && <Text theme='error' text={t('Неверный логин или пароль')} />}
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
export default memo(LoginForm)
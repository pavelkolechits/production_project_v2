import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button/Button"
import cls from './LoginForm.module.scss'
import { Input } from "shared/ui/Input/Input"
import { classNames } from "shared/helpers/classNames/classNames"


interface LoginFormProps {
    className?: string;
}

export const LoginForm  = (props: LoginFormProps) => {
    const { className } = props
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                placeholder={t('Введите имя пользователя')}
                className={cls.input}
                type="text"
                // onChange={onChangeUsername}
                // value={username}
            />
            <Input
                placeholder={t('Введите пароль')}
                className={cls.input}
                type="text"
                // onChange={onChangePassword}
                // value={password}
            />
            <Button
                // disabled={isLoading}
                // onClick={onLoginClick}
                theme='outline'
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    )
}
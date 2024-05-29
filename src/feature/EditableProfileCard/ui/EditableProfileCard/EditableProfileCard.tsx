import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard } from "entities/Profile/ui/ProfileCard";
import { getProfileForm, getProfileIsLoading, getProfileError, getProfileReadonly, getProfileValidateErrors } from "feature/EditableProfileCard/model/selectors/editableProfileCardSelectors";
import { fetchProfileData } from "feature/EditableProfileCard/model/services/fetchProfileData/fetchProfileData";
import { profileReducer, profileActions } from "feature/EditableProfileCard/model/slices/editableProfileCardSlice";
import { useEffect, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDispatch";
import { ReducerList, useAsyncRedusers } from "shared/hooks/useAsyncReducers/useAsyncRedusers";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";
import { loginReducer } from "feature/AuthByUsername/model/slices/loginSlice";
import { ValidateProfileError } from "feature/EditableProfileCard/model/consts/errorConsts";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";


interface EditableProfileCardProps {
    className?: string
    id: string;
}




export const EditableProfileCard = ({ className, id }: EditableProfileCardProps) => {
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors)
    const dispatch = useAppDispatch();
    const { t } = useTranslation()
    useAsyncRedusers({ reducers: { profile: profileReducer } })

    const validateErrorTranslates = useMemo(() => ({
        [ValidateProfileError.SERVER_ERROR]: t(
            'Серверная ошибка при сохранении',
        ),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            'Имя и фамилия обязательны',
        ),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    }), [])

    useEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    }, [dispatch, id]);

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ firstname: value || '' }));
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch],
    );
    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: value || '' }));
        },
        [dispatch],
    );
    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch],
    );
    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch],
    );
    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch],
    )

    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch],
    );
    return (
        <VStack gap="8">
            <EditableProfileCardHeader />
            {validateErrors?.length
                &&
                validateErrors.map((err) => <Text key={err} theme='error' text={validateErrorTranslates[err]} />

                )
            }
            <ProfileCard
                className={className}
                data={formData}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                readonly={readonly}
                onChangeLastname={onChangeLastname}
                onChangeFirstname={onChangeFirstname}
                isLoading={isLoading}
                error={error}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
                onChangeAvatar={onChangeAvatar}
            />
        </VStack>

    );
};



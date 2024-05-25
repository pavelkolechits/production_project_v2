import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard } from "entities/Profile/ui/ProfileCard";
import { getProfileForm, getProfileIsLoading, getProfileError, getProfileReadonly } from "feature/EditableProfileCard/model/selectors/editableProfileCardSelectors";
import { fetchProfileData } from "feature/EditableProfileCard/model/services/fetchProfileData/fetchProfileData";
import { profileReducer, profileActions } from "feature/EditableProfileCard/model/slices/editableProfileCardSlice";
import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDispatch";
import { ReducerList, useAsyncRedusers } from "shared/hooks/useAsyncReducers/useAsyncRedusers";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";
import { loginReducer } from "feature/AuthByUsername/model/slices/loginSlice";


interface EditableProfileCardProps {
    className?: string
    id: string;
}


export const EditableProfileCard = ({ className, id }: EditableProfileCardProps) => {
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    useAsyncRedusers({reducers: {profile: profileReducer}})

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
    );
    return (
            <VStack gap="8">
                <EditableProfileCardHeader />
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
                />
            </VStack>

    );
};



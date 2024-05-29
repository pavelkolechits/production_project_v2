import { Profile } from '/entities/Profile';
import { ValidateProfileError } from '../consts/errorConsts';

export interface ProfileSchema {
    data?: Profile;
    formData?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
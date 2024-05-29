import { useSelector } from 'react-redux';
import { getUserAuthData} from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { getRouteMain } from 'shared/consts/router';

interface RequireAuthProps {
    children: JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();


    if (!auth) {
        return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
    }


    return children;
}
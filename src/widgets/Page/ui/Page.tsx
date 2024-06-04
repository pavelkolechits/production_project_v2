import { classNames } from 'shared/helpers/classNames/classNames';
import {
    MutableRefObject, ReactNode, UIEvent, useEffect, useRef,
} from 'react';

import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
}


export const Page = ({ className, children }: PageProps) => {
    
   
    return (
        <main className={classNames(cls.Page , {}, [className])}

        >
            {children}
           
        </main>
    );
};
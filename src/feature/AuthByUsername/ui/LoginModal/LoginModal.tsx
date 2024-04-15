import { classNames } from "shared/helpers/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { Suspense } from "react";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void
}


export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames('', {}, [className])}
        >
            { isOpen &&
            <Suspense fallback={''}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
            } 

        </Modal>
    );
};
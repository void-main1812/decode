import React from "react";
import {IconType} from "react-icons";

interface AuthSocialButtonProps {
    icon: IconType;
    onClick: () => void;
    title: string;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
                                                               icon: Icon,
                                                               onClick,
                                                               title,
                                                           }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="inline-flex w-full -translate-y-1 hover:translate-y-0 justify-center gap-4 rounded-lg bg-gray-200 font-semibold hover:scale-95 text-gray-700 px-4 py-3 transition-all duration-75 focus:outline-offset-0"
        >
            <Icon size={20}/>
            <span>{title}</span>
        </button>
    );
};

export default AuthSocialButton;
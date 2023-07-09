import React from "react";
import {IconType} from "react-icons";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import {motion} from "framer-motion";

interface AuthSocialButtonProps {
    icon: IconType;
    onClick: () => void;
    title: string;
    delay?: number;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
                                                               icon: Icon,
                                                               onClick,
                                                               title,
                                                               delay
                                                           }) => {

    const {ref, mainControls} = useScrollAnimation();

    return (
        <motion.button
            variants={{
                hidden: {
                    opacity: 0,
                },
                visible: {
                    opacity: 1,
                }
            }}
            initial='hidden'
            animate={mainControls}
            transition={{duration: 0.25, delay: delay}}
            ref={ref}
            type="button"
            onClick={onClick}
            className="inline-flex w-full justify-center hover:scale-110 gap-4 rounded-lg bg-gray-200 font-semibold text-gray-700 py-3 transition focus:outline-offset-0"
        >
            <Icon size={20}/>
            <span>{title}
</span>
        </motion.button>
    );
};

export default AuthSocialButton;
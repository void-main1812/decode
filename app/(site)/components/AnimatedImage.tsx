import React, {useEffect, useRef} from 'react';
import {motion, useAnimation, useInView} from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface Props {
    children: React.ReactNode;
    delay?: number;
}

const AnimatedImage: React.FC<Props> = ({children, delay}) => {

    const {ref, mainControls} = useScrollAnimation();

    return (
        <motion.div variants={{
            hidden: {
                opacity: 0, y: "50%"
            },
            visible: {
                opacity: 1, y: "0"
            },
        }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{duration: 0.75, delay: delay}} ref={ref}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedImage;
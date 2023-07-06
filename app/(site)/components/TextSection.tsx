import React, {useEffect, useRef} from 'react';
import {motion, useAnimation, useInView} from "framer-motion";

interface Props {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const TextSection: React.FC<Props> = ({children, className, delay}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {margin: "-20% 0% -20% 0%", once: true})

    const mainControls = useAnimation();

    useEffect(() => {
        //     Fire animation
        if (isInView) {
            mainControls.start("visible").then(() => console.log("Animation completed"))
        }
    }, [isInView])

    return (
        <motion.div variants={{
            hidden: {
                opacity: 0, y: "-50%"
            },
            visible: {
                opacity: 1, y: "0"
            },
        }} initial="hidden" animate={mainControls}
                    transition={{duration: 0.75, delay: delay}} ref={ref}>

            {children}
        </motion.div>
    );
};

export default TextSection;
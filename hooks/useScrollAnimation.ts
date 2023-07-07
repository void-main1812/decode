import {useEffect, useRef} from 'react';
import {useAnimation, useInView} from "framer-motion";

const UseScrollAnimation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {margin: "0% 0% -10% 0%", once: true})

    const mainControls = useAnimation();

    useEffect(() => {
        //     Fire animation
        if (isInView) {
            mainControls.start("visible").then(() => console.log("Animation completed"))
        }
    }, [isInView]);

    return {ref, mainControls};
};

export default UseScrollAnimation;
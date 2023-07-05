import {useSpring} from "react-spring";
import {useState} from "react";

export const useDragAnimation = () => {
    const [presentIndex, setPresentIndex] = useState(0);

    // ---------------------------------Handling the image or card hover animations

    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: {mass: 10, tension: 500, friction: 40},
    }));

    const calc = (x: number, y: number) => [
        (y - window.innerHeight / 2) / 80,
        (x - window.innerWidth / 2) / 80,
        1.01,
    ];

    const handleMouseMove = (x: number, y: number) => {
        const data = calc(x, y);
        set({xys: data});
    };

    const handleMouseLeave = () => {
        set({xys: [0, 0, 1]});
    };

    const trans = (x: number, y: number, s: number) =>
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    return {calc, handleMouseLeave, handleMouseMove, props, trans}
}
import './sass/square.scss';
import { gsap } from "gsap";

export default function() {

    const squareEl = '#square';

    return {
        start : () => {
            gsap.fromTo(squareEl, { x: 0 }, { x: 200, duration: 1 });
        },
        back : () => {
            gsap.to(squareEl, { x: 0, duration: 1 });
        }
    }
}
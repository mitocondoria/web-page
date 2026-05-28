import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

async function failingStar() {
    for (let i: number = 0; i < 10; i++) {
        const img = document.createElement("img");
        console.log(img);
        const starUrl = new URL("../assets/star.png", import.meta.url).href;
        img.src = starUrl;
        img.alt = "star";
        img.style.position = "fixed";
        img.style.left = "0";
        img.style.top = "0";
        img.style.width = `${gsap.utils.random(24, 64)}px`;
        img.style.pointerEvents = "none";
        img.style.zIndex = "-1";

        document.body.appendChild(img);
        let startX: number = -100;
        const startY = () => gsap.utils.random(-window.innerHeight / 2, window.innerHeight / 2);
        gsap.fromTo(
            img,
            {
                x: startX,
                y: startY,
            },
            {
                x: window.innerWidth + 10,
                y: `+=${window.innerHeight + 200}`,
                repeat: -1,
                duration: gsap.utils.random(6, 12),
                delay: i * 0.5,
                ease: "none"
            }
        );
        gsap.fromTo(
            img,
            {
                rotate: 0
            },
            {
                rotate: 360,
                repeat: -1,
                duration: 3,
                ease: "none"
            }
        );
    }
}
failingStar();
window.addEventListener("scroll", () => {
    console.log("gfhs");
    let scroll = window.scrollY;
    const background: any = document.querySelector(".background");

    if (background != null) {
        background.style.background.scrollY = `${scroll / 2}px`;
    }
});

gsap.to(".light", {
    rotationY: 180,
    duration: 8,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
});
async function failingStar(){
    for (let i = 0; i < 10; i++) {
    const img = document.createElement("img");

    img.src = "star.png";
    img.alt = "star";
    img.style.position = "fixed";
    img.style.left = "0";
    img.style.top = "0";
    img.style.width = `${gsap.utils.random(24, 64)}px`;
    img.style.pointerEvents = "none";
    img.style.zIndex = "-1";

    document.body.appendChild(img);
    let startX = -100;
    let startY = () => gsap.utils.random(-window.innerHeight / 2, window.innerHeight / 2);
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
window.addEventListener("scroll",()=>{
    let scroll = window.scrollY;
    const background = document.querySelector(".background");

    background.style.background.position.y = `${scroll / 2}px`;
})




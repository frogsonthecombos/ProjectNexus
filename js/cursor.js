/* =========================================================
   NEXUS CUSTOM CURSOR
========================================================= */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorRing =
    document.querySelector(".cursor-ring");

const cursorGlow =
    document.querySelector(".cursor-glow");


let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;


document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;


    cursorDot.style.left =
        `${mouseX}px`;

    cursorDot.style.top =
        `${mouseY}px`;


    cursorGlow.style.left =
        `${mouseX}px`;

    cursorGlow.style.top =
        `${mouseY}px`;

});


function animateCursor() {

    ringX +=
        (mouseX - ringX) * .15;

    ringY +=
        (mouseY - ringY) * .15;


    cursorRing.style.left =
        `${ringX}px`;

    cursorRing.style.top =
        `${ringY}px`;


    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();


/* HOVER STATES */

const interactive =
    document.querySelectorAll(
        "a, button, .feature-card, .trend-item"
    );


interactive.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursorRing.style.width = "65px";

        cursorRing.style.height = "65px";

        cursorRing.style.borderColor =
            "rgba(183,255,0,.7)";

    });


    element.addEventListener("mouseleave", () => {

        cursorRing.style.width = "35px";

        cursorRing.style.height = "35px";

        cursorRing.style.borderColor =
            "rgba(255,255,255,.5)";

    });

});

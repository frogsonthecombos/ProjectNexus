/* =========================================================
   NEXUS MAIN ENGINE
========================================================= */

console.log(
    "%cNEXUS",
    "font-size:40px;font-weight:900;"
);

console.log(
    "%cTHE GAMING NETWORK",
    "font-size:12px;letter-spacing:5px;"
);

console.log(
    "%cSYSTEM ONLINE",
    "color:#b7ff00;font-weight:bold;"
);


/* =========================================================
   PAGE READY
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.remove(
            "loading"
        );

    }
);


/* =========================================================
   RANDOM SIGNAL EFFECT
========================================================= */

const signalElements =
    document.querySelectorAll(
        ".section-number, .kicker-line"
    );


setInterval(() => {

    const element =
        signalElements[
            Math.floor(
                Math.random() *
                signalElements.length
            )
        ];


    if (!element)
        return;


    element.style.opacity = ".3";


    setTimeout(() => {

        element.style.opacity = "1";

    }, 120);

}, 2500);


/* =========================================================
   KEYBOARD SHORTCUT
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key.toLowerCase()
            === "n"
        ) {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    }
);

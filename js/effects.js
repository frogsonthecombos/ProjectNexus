/* =========================================================
   NEXUS EFFECT ENGINE
========================================================= */


/* =========================================================
   REVEAL ON SCROLL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(
    element =>
        revealObserver.observe(element)
);


/* =========================================================
   MAGNETIC ELEMENTS
========================================================= */

const magneticElements =
    document.querySelectorAll(
        ".magnetic"
    );


magneticElements.forEach(element => {

    element.addEventListener(
        "mousemove",
        event => {

            const rect =
                element.getBoundingClientRect();


            const x =
                event.clientX -
                (rect.left +
                    rect.width / 2);


            const y =
                event.clientY -
                (rect.top +
                    rect.height / 2);


            element.style.transform =
                `translate(
                    ${x * .15}px,
                    ${y * .15}px
                )`;

        }
    );


    element.addEventListener(
        "mouseleave",
        () => {

            element.style.transform =
                "translate(0,0)";

        }
    );

});


/* =========================================================
   INDEX COUNTER
========================================================= */

const indexCounter =
    document.getElementById(
        "indexCounter"
    );


let currentIndex = 0;

const targetIndex = 2487;


const counterInterval =
    setInterval(
        () => {

            currentIndex +=
                Math.ceil(
                    (targetIndex -
                        currentIndex) /
                    18
                );


            if (
                currentIndex >=
                targetIndex
            ) {

                currentIndex =
                    targetIndex;

                clearInterval(
                    counterInterval
                );

            }


            indexCounter.textContent =
                currentIndex
                    .toString()
                    .padStart(4, "0");

        },
        30
    );


/* =========================================================
   PARALLAX HERO
========================================================= */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


document.addEventListener(
    "mousemove",
    event => {

        if (!heroVisual)
            return;


        const x =
            (event.clientX /
                window.innerWidth -
                .5);

        const y =
            (event.clientY /
                window.innerHeight -
                .5);


        heroVisual.style.transform =
            `translate(
                ${x * 25}px,
                ${y * 25}px
            )`;

    }
);


/* =========================================================
   TREND ITEM HOVER
========================================================= */

document.querySelectorAll(
    ".trend-item"
).forEach(item => {

    item.addEventListener(
        "mousemove",
        event => {

            const rect =
                item.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            item.style.background =
                `radial-gradient(
                    circle at ${x}px 50%,
                    rgba(183,255,0,.035),
                    transparent 30%
                )`;

        }
    );


    item.addEventListener(
        "mouseleave",
        () => {

            item.style.background =
                "";

        }
    );

});


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );


            if (!target)
                return;


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

});

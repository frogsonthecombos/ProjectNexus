/* =========================================================
   NEXUS LOADER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");

    const bar = document.getElementById("loaderBar");

    const percent = document.getElementById("loaderPercent");

    const text = document.getElementById("loaderText");


    const messages = [

        "INITIALIZING NETWORK",

        "CONNECTING NODES",

        "LOADING SIGNAL",

        "CALIBRATING INTERFACE",

        "NEXUS ONLINE"

    ];


    let progress = 0;


    const interval = setInterval(() => {

        progress += Math.random() * 7 + 3;

        if (progress >= 100) {

            progress = 100;

            clearInterval(interval);

            text.textContent = messages[4];

            setTimeout(() => {

                loader.classList.add("loaded");

                document.body.classList.remove("loading");

            }, 500);

        }


        bar.style.width = `${progress}%`;

        percent.textContent =
            `${Math.floor(progress).toString().padStart(2, "0")}%`;


        const index =
            Math.min(
                Math.floor(progress / 20),
                messages.length - 1
            );

        text.textContent = messages[index];

    }, 100);

});

/* =========================================================
   NEXUS NAVIGATION
========================================================= */

const menuButton =
    document.getElementById(
        "menuButton"
    );

const nav =
    document.getElementById(
        "mainNav"
    );


menuButton.addEventListener(
    "click",
    () => {

        nav.classList.toggle(
            "open"
        );

    }
);


/* CLOSE MOBILE MENU */

document.querySelectorAll(
    ".nav-link"
).forEach(link => {

    link.addEventListener(
        "click",
        () => {

            nav.classList.remove(
                "open"
            );

        }
    );

});


/* ACTIVE NAVIGATION */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        navLinks.forEach(
                            link => {

                                link.classList.remove(
                                    "active"
                                );

                                if (
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${entry.target.id}`
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );

                    }

                }
            );

        },
        {
            threshold: .45
        }
    );


sections.forEach(
    section =>
        observer.observe(section)
);

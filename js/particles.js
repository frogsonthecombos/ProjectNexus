/* =========================================================
   NEXUS PARTICLE NETWORK
========================================================= */

const canvas =
    document.getElementById(
        "particleCanvas"
    );

const ctx =
    canvas.getContext("2d");


let particles = [];

let particleCount = 80;


const mouse = {

    x: null,

    y: null,

    radius: 180

};


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;


    particleCount =
        window.innerWidth < 700
            ? 35
            : 80;

}


resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);


document.addEventListener(
    "mousemove",
    event => {

        mouse.x =
            event.clientX;

        mouse.y =
            event.clientY;

    }
);


class Particle {

    constructor() {

        this.x =
            Math.random() *
            canvas.width;

        this.y =
            Math.random() *
            canvas.height;

        this.vx =
            (Math.random() - .5)
            * .25;

        this.vy =
            (Math.random() - .5)
            * .25;

        this.size =
            Math.random() * 1.5 + .3;

    }


    update() {

        this.x += this.vx;

        this.y += this.vy;


        if (
            this.x < 0 ||
            this.x > canvas.width
        ) {

            this.vx *= -1;

        }


        if (
            this.y < 0 ||
            this.y > canvas.height
        ) {

            this.vy *= -1;

        }


        if (mouse.x !== null) {

            const dx =
                mouse.x - this.x;

            const dy =
                mouse.y - this.y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance <
                mouse.radius
            ) {

                const force =
                    (mouse.radius -
                        distance) /
                    mouse.radius;

                this.x -=
                    (dx / distance)
                    * force
                    * .5;

                this.y -=
                    (dy / distance)
                    * force
                    * .5;

            }

        }

    }


    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(183,255,0,.45)";

        ctx.fill();

    }

}


function createParticles() {

    particles = [];

    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        particles.push(
            new Particle()
        );

    }

}


function connectParticles() {

    for (
        let a = 0;
        a < particles.length;
        a++
    ) {

        for (
            let b = a + 1;
            b < particles.length;
            b++
        ) {

            const dx =
                particles[a].x -
                particles[b].x;

            const dy =
                particles[a].y -
                particles[b].y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 120) {

                const opacity =
                    1 -
                    distance / 120;


                ctx.beginPath();

                ctx.strokeStyle =
                    `rgba(255,255,255,${opacity * .06})`;

                ctx.lineWidth = .5;

                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );

                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );

                ctx.stroke();

            }

        }

    }

}


function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(
        particle => {

            particle.update();

            particle.draw();

        }
    );


    connectParticles();


    requestAnimationFrame(
        animateParticles
    );

}


createParticles();

animateParticles();

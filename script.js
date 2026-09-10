// NEXUS SYSTEM

document.addEventListener("DOMContentLoaded", () => {

  console.log("NEXUS SYSTEM ONLINE");

  // Card hover effect
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    card.addEventListener("mousemove", event => {

      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

    });

  });


  // Simple reveal animation

  const sections = document.querySelectorAll(
    ".card, .feature-card, .trend"
  );

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";

        }

      });

    },
    {
      threshold: 0.1
    }
  );


  sections.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
      "opacity .7s ease, transform .7s ease";

    observer.observe(element);

  });


  // Mobile menu placeholder

  const menu = document.getElementById("menuBtn");

  if (menu) {

    menu.addEventListener("click", () => {

      alert("NEXUS navigation coming soon.");

    });

  }

});

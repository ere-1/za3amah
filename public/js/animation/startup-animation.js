

const loadingAnimate = () => {
    const loadingContainer = document.getElementById('loading');
    loadingContainer.addEventListener("click", () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const audio = document.querySelector("audio");

  tl.to(".loading-page h1", {
    opacity: 1,
    y: -10,
    duration: 1,
  })
    .to(".loading-page h1", {
      letterSpacing: "8px",
      duration: 0.8,
    })
    .to(".loading-page", {
      y: "-100%",
      duration: 1.2,
      delay: 0.5,
    })
    .from(
      "#information",
      {
        opacity: 0,
        duration: 0.5,
      },
      "-=0.6",
    )

    // PROFILE IMAGE
    .from(
      ".info-user img",
      {
        scale: 0,
        rotation: -10,
        duration: 0.8,
      },
      "-=0.3",
    )

    // NAME + TEXT
    .from(".name h1, .name h2, .name p", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
    })

    // LINKS
    .from(".links a", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
    })

    // MUSIC PLAYER
    .from(".music-player", {
      y: 80,
      opacity: 0,
      duration: 0.6,
    });
  audio.play();

  // loadingContainer.style.display = "none";
})

          document.addEventListener('DOMContentLoaded', () => {
            new TypeIt("#typing", {
                strings: "be yourself",
                speed: 120,
                loop: true,
            }).go()
                .pause(2000);
        });
};

export default loadingAnimate;
document.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const scrollPosition = window.scrollY;
  const hideThreshold = window.innerHeight * 0.4; // 40vh
  const showThreshold = window.innerHeight * 0.8; // 80vh

  if (scrollPosition > showThreshold) {
    header.classList.add("fixed");
  } else if (scrollPosition > hideThreshold) {
    header.classList.add("hidden");
    header.classList.remove("fixed");
  } else {
    header.classList.remove("fixed");

    // Delay removing hidden to allow transition back
    setTimeout(() => {
      header.classList.remove("hidden");
    }, 100);
  }

  // === Menu bar script ===
  const menuBar = document.querySelector(".menu-bar");
  const navLinks = document.querySelector(".navLinks");

  menuBar.addEventListener("click", () => {
    if (!navLinks.classList.contains("show")) {
      // Show navLinks with delay for transition
      navLinks.style.display = "flex";
      setTimeout(() => {
        navLinks.classList.add("show");
      }, 10);
    } else {
      // Animate out before hiding
      navLinks.classList.remove("show");
      setTimeout(() => {
        navLinks.style.display = "none";
      }, 500); // Matches transition duration
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  updateLeftSwiper();
});
const swiperContent = [
  { heading: "Make Dream For Better Future", para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quae sequi iste optio? Quis obcaecati reprehenderit error. Sint reiciendis impedit alias ipsa, exercitationem officiis totam tenetur corporis ducimus aperiam aut." },
  { heading: "Discover Quality Of Space", para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quae sequi iste optio? Quis obcaecati reprehenderit error. Sint reiciendis impedit alias ipsa, exercitationem officiis totam tenetur corporis ducimus aperiam aut." },
  { heading: "Luxury Space With Pincode", para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quae sequi iste optio? Quis obcaecati reprehenderit error. Sint reiciendis impedit alias ipsa, exercitationem officiis totam tenetur corporis ducimus aperiam aut." },
  { heading: "This Site Developed By DEVZI", para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quae sequi iste optio? Quis obcaecati reprehenderit error. Sint reiciendis impedit alias ipsa, exercitationem officiis totam tenetur corporis ducimus aperiam aut." },
  { heading: "DEVZI Is A Modern Web Pirate", para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quae sequi iste optio? Quis obcaecati reprehenderit error. Sint reiciendis impedit alias ipsa, exercitationem officiis totam tenetur corporis ducimus aperiam aut." },
  { heading: "Pirates Of The Web", para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quae sequi iste optio? Quis obcaecati reprehenderit error. Sint reiciendis impedit alias ipsa, exercitationem officiis totam tenetur corporis ducimus aperiam aut." },
];

function updateContent(index) {
  const heading = document.querySelector(".home-head");
  const paragraph = document.querySelector(".home-para");
  const textContainer = document.querySelector(".home-swiper-content");

  // Remove active class to reset animation
  textContainer.classList.remove("active");

  setTimeout(() => {
    heading.innerHTML = swiperContent[index].heading;
    paragraph.innerHTML = swiperContent[index].para;

    // Re-add the active class to trigger animation
    textContainer.classList.add("active");
  }, 300); // Increased delay to properly reset the animation
}

function updateLeftSwiper() {
  const activeImage = document.getElementById("activeImage");
  const activeSlide = document.querySelector(
    ".home-swiper-wraper .swiper-slide-active"
  );

  if (!activeSlide) return;

  const newSrc = activeSlide.querySelector("img").src;
  const newId = activeImage.id;
  // Step 1: Fade out first
  activeImage.classList.remove("active");

  setTimeout(() => {
    // Step 2: Change image only after fade-out completes
    activeImage.src = newSrc;

    // Step 3: Fade in the new image
    setTimeout(() => {
      activeImage.classList.add("active");
    }, 50); // Small delay before fading in the new image
  }, 100); // This matches the fade-out duration
}

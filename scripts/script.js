
document.addEventListener("DOMContentLoaded", () => {
  updateLeftSwiper();
  const menuBar = document.querySelector(".menu-bar");
  const navLinks = document.querySelector(".navLinks");

  menuBar.addEventListener("click", () => {
    navLinks.classList.toggle("show")
    menuBar.classList.toggle("active")
  });
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

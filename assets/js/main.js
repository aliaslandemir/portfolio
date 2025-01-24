// ========== PRELOADER HANDLER ==========
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hide"); // triggers CSS transition to hide preloader
  });
  
  // ========== INITIALIZE AOS ==========
  AOS.init();
  
  // ========== SLIDER NAVIGATION ==========
  let currentSlide = 0;
  function moveSlide(direction) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
  }
  
  // ========== SCROLL TO TOP ==========
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.onscroll = function () {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  

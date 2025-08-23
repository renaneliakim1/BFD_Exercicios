document.addEventListener("DOMContentLoaded", () => {
  const carouselContainers = document.querySelectorAll(".carousel-container");

  carouselContainers.forEach((container) => {
    const carouselTrack = container.querySelector(".carousel-track");
    const cards = Array.from(carouselTrack.children);
    const prevButton = container.querySelector(".prev");
    const nextButton = container.querySelector(".next");

    let currentIndex = 0;

    function updateCarousel() {
      if (window.innerWidth <= 768) {
    
        const translateX = -currentIndex * 100;
        carouselTrack.style.transform = `translateX(${translateX}%)`;

        prevButton.style.display = "flex";
        nextButton.style.display = "flex";

        prevButton.style.opacity = currentIndex === 0 ? "0.5" : "1";
        nextButton.style.opacity =
          currentIndex === cards.length - 1 ? "0.5" : "1";
      } else {
        
        carouselTrack.style.transform = `translateX(0)`;
        prevButton.style.display = "none";
        nextButton.style.display = "none";
      }
    }

    function goToPrevious() {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    }

    function goToNext() {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    }

    prevButton.addEventListener("click", goToPrevious);
    nextButton.addEventListener("click", goToNext);

    let startX = 0;
    let isDragging = false;

    carouselTrack.addEventListener("touchstart", (e) => {
      if (window.innerWidth <= 768) {
        startX = e.touches[0].clientX;
        isDragging = true;
      }
    });

    carouselTrack.addEventListener("touchmove", (e) => {
      if (!isDragging || window.innerWidth > 768) return;
      e.preventDefault();
    });

    carouselTrack.addEventListener("touchend", (e) => {
      if (!isDragging || window.innerWidth > 768) return;

      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;

  
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
      }

      isDragging = false;
    });

    window.addEventListener("resize", () => {
      currentIndex = 0;
      updateCarousel();
    });

    updateCarousel();
  });
});

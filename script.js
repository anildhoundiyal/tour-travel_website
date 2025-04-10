let currentIndex = 0;
  const slidesToShow = 3;
  const container = document.getElementById('carousel');
  const slide = document.querySelector('.slide');
  let slideWidth = slide.offsetWidth + 20; // 20px gap
  const totalSlides = document.querySelectorAll('.slide').length;

  function scrollSlides(direction) {
    const maxIndex = totalSlides - slidesToShow;
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  // Auto scroll
  setInterval(() => {
    scrollSlides(1);
    if (currentIndex >= totalSlides - slidesToShow) {
      currentIndex = -1; // so next increment becomes 0
    }
  }, 4000);

  // Fix width on window resize
  window.addEventListener('resize', () => {
    slideWidth = slide.offsetWidth + 20;
    scrollSlides(0); // re-apply transform
  });


   

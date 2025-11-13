document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  let slides = Array.from(track.children);
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 1; 
  let slideWidth = slides[0].offsetWidth + 60; 

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  slides = Array.from(track.children);

  track.style.transition = 'none';
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

  function updateCarousel() {
    track.style.transition = 'transform 0.5s ease-in-out';
    const offset = slideWidth * currentIndex;
    track.style.transform = `translateX(-${offset}px)`;
  }

  track.addEventListener('transitionend', () => {
    if (slides[currentIndex] === slides[0]) {
      track.style.transition = 'none';
      currentIndex = slides.length - 2;
      track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    } else if (slides[currentIndex] === slides[slides.length - 1]) {
      track.style.transition = 'none';
      currentIndex = 1;
      track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
  });

  
  let autoSlide = setInterval(() => {
    currentIndex++;
    updateCarousel();
  }, 5000);

 
  nextButton.addEventListener('click', () => {
    clearInterval(autoSlide);
    currentIndex++;
    updateCarousel();
    // Restart auto slide
    autoSlide = setInterval(() => {
      currentIndex++;
      updateCarousel();
    }, 5000);
  });

 
  prevButton.addEventListener('click', () => {
    clearInterval(autoSlide);
    currentIndex--;
    updateCarousel();
    
    autoSlide = setInterval(() => {
      currentIndex++;
      updateCarousel();
    }, 5000);
  });
});


/*Career.js */
 document.addEventListener('DOMContentLoaded', () => {
    const listings = document.querySelectorAll('.job-listings li');
    listings.forEach((li, index) => {
      li.style.opacity = 0;
      li.style.transform = 'translateY(20px)';
      setTimeout(() => {
        li.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        li.style.opacity = 1;
        li.style.transform = 'translateY(0)';
      }, index * 200);
    });
  });

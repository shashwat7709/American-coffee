// Add vanilla-tilt.js library
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.product-track');
  const cards = document.querySelectorAll('.product-card');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  // Initialize vanilla-tilt
  VanillaTilt.init(cards, {
    max: 15, // maximum tilt rotation (degrees)
    speed: 400, // speed of the enter/exit transition
    glare: true, // whether to add glare effect
    "max-glare": 0.3, // maximum glare opacity
    scale: 1.05, // scaling on hover
  });

  // Function to update the carousel
  function updateCarousel(index) {
    // Update transform
    track.style.transform = `translateX(-${index * 100}%)`;
    
    // Update active states
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
    
    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  // Function to move to next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel(currentIndex);
  }

  // Set up automatic rotation
  let autoRotate = setInterval(nextSlide, 10000);

  // Add click handlers for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel(currentIndex);
      
      // Reset the interval when manually clicked
      clearInterval(autoRotate);
      autoRotate = setInterval(nextSlide, 10000);
    });
  });

  // Show first slide
  updateCarousel(0);

  // Pause rotation on hover
  track.addEventListener('mouseenter', () => {
    clearInterval(autoRotate);
  });

  // Resume rotation when mouse leaves
  track.addEventListener('mouseleave', () => {
    autoRotate = setInterval(nextSlide, 10000);
  });
}); 
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelector('.carousel-items');
const images = document.querySelectorAll('.carousel-items .work');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
const totalImages = images.length;
const imageWidth = images[0].clientWidth;
let autoSlideInterval; // Variable to store the interval ID

function showImage(index) {
  carouselItems.style.transform = `translateX(-${index * imageWidth}px)`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextImage, 3000); // Transition to next image every 5 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval); // Stop the auto slide interval
}

nextButton.addEventListener('click', () => {
  nextImage();
  stopAutoSlide(); // Stop auto slide when manually navigating
});

prevButton.addEventListener('click', () => {
  prevImage();
  stopAutoSlide(); // Stop auto slide when manually navigating
});

carousel.addEventListener('mouseenter', stopAutoSlide); // Stop auto slide on mouseenter
carousel.addEventListener('mouseleave', startAutoSlide); // Start auto slide on mouseleave

// Start auto slide when the page loads
startAutoSlide();

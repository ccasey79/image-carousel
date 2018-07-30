

console.log('JS LOADED!');


let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#previous');
let arrowRight = document.querySelector('#next');
let current = 0;

// Clear slide images
function reset() {
  for(let i = 0; i < sliderImages.length; i++ ) {
    sliderImages[i].style.display = 'none';
  }
}

// Start Slide slider
function startSlide() {
  reset()
  sliderImages[0].style.display = 'block';
}

// Show previous 3 images
function slideLeft() {
  reset()
  sliderImages[current - 1 ].style.display = 'block'
  current --;
}

// Show next 3 images
function slideRight() {
  reset()
  sliderImages[current + 1 ].style.display = 'block'
  current ++;
};

// Left arrow click for next
arrowLeft.addEventListener('click', function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click for next
arrowRight.addEventListener('click', function() {
  if (current === sliderImages.length -1 ) {
    current = -1
  }
  slideRight();
});

startSlide();

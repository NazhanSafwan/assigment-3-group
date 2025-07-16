// -------------------- CLOCK --------------------
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// -------------------- TOGGLE RECIPE BOX --------------------
function toggleRecipe(id) {
  const recipe = document.getElementById(id);
  if (recipe) {
    recipe.classList.toggle("open");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Klik gambar dengan data-recipe
  document.querySelectorAll('.card img[data-recipe]').forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener('click', () => {
      const id = img.getAttribute('data-recipe');
      toggleRecipe(id);
    });
  });

  // Klik tajuk h3 untuk toggle (pastikan onclick masih ada dalam HTML)
  document.querySelectorAll('.card h3').forEach(h3 => {
    h3.style.cursor = "pointer";
  });
});

// -------------------- SLIDESHOW --------------------
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active-slide');
    dots[i].classList.remove('active');
  });
  slides[index].classList.add('active-slide');
  dots[index].classList.add('active');
  slideIndex = index;
}

function autoSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

if (slides.length) {
  setInterval(autoSlide, 5000);
}

// -------------------- VIDEO PLAY / PAUSE --------------------
document.querySelectorAll('.click-to-play').forEach(video => {
  video.addEventListener('click', () => {
    document.querySelectorAll('.click-to-play').forEach(v => {
      if (v !== video) v.pause();
    });
    video.paused ? video.play() : video.pause();
  });
});

// -------------------- SHOW / HIDE INGREDIENTS IN VIDEO PAGE --------------------
document.querySelectorAll('.video-caption').forEach(caption => {
  caption.addEventListener('click', () => {
    const ingredientList = caption.parentElement.querySelector('.ingredients');
    if (ingredientList) {
      ingredientList.style.display = ingredientList.style.display === 'block' ? 'none' : 'block';
    }
  });
});


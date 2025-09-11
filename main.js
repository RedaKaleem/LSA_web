if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // MOBILE MENU TOGGLE
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
      });
    }

    // SLIDESHOW
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function showSlide(index) {
      if (!slides || slides.length === 0) return;
      slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    }

    if (prevBtn && nextBtn && slides.length > 0) {
      prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      });
      nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      });

      // Auto slideshow
      setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }, 5000);

      // Show the first slide initially
      showSlide(currentSlide);
    }
  });
}

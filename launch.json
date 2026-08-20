document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const revealItems = document.querySelectorAll('.reveal');
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  const updateNavState = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  const revealNow = () => {
    revealItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.9;
      item.classList.toggle('is-visible', inView);
    });
  };

  if (revealItems.length > 0) {
    revealNow();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  updateNavState();
  window.addEventListener('scroll', () => {
    updateNavState();
    revealNow();
  }, { passive: true });

  if (form && formStatus) {
    form.addEventListener('submit', (event) => {
      formStatus.textContent = 'Mengirim...';
      formStatus.style.color = '#7dd3fc';

      if (!form.checkValidity()) {
        event.preventDefault();
        formStatus.textContent = 'Harap lengkapi form dengan benar';
        formStatus.style.color = '#fbbf24';
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const revealItems = document.querySelectorAll('.reveal');
  const parallaxItems = document.querySelectorAll('.parallax');
  const form = document.getElementById('contactForm');
  const phoneNumber = '628981056300';
  const defaultMessage = 'Halo Service Center Te-Fa, saya ingin bertanya tentang layanan Anda.';

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.88;

    revealItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom) {
        item.classList.add('is-visible');
      }
    });

    parallaxItems.forEach((item) => {
      const speed = Number(item.dataset.speed || 0.08);
      const rect = item.getBoundingClientRect();
      const offset = (window.innerHeight - rect.top) * speed;
      item.style.setProperty('--parallax-shift', `${Math.max(-18, Math.min(18, offset - 30))}px`);
    });
  };

  if (nav) {
    const handleScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 12);
    };

    window.addEventListener('scroll', () => {
      handleScroll();
      revealOnScroll();
    });
    handleScroll();
  }

  if (revealItems.length) {
    revealOnScroll();
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      form.classList.add('is-sending');

      const name = document.getElementById('name')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const message = document.getElementById('message')?.value || '';
      const whatsappText = `Halo Service Center Te-Fa, nama saya ${name}. Email saya ${email}. Pesan: ${message}`;
      const encodedText = encodeURIComponent(whatsappText);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 500);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const phoneNumber = '628981056300';
  const defaultMessage = 'Halo Service Center Te-Fa, saya ingin bertanya tentang layanan Anda.';

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

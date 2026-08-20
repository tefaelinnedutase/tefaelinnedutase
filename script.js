document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const backToTop = document.getElementById('backToTop');
  const revealItems = document.querySelectorAll('.reveal');
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const formReturnUrl = document.getElementById('formReturnUrl');

  if (formReturnUrl) {
    formReturnUrl.value = `${window.location.origin}${window.location.pathname}`;
  }

  const updateNavState = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 24);
    if (backToTop) backToTop.classList.toggle('is-visible', window.scrollY > 420);
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
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (form && formStatus) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      formStatus.textContent = 'Mengirim...';
      formStatus.style.color = '#7dd3fc';

      if (!form.checkValidity()) {
        formStatus.textContent = 'Harap lengkapi form dengan benar';
        formStatus.style.color = '#fbbf24';
        return;
      }

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });

        if (!response.ok) {
          throw new Error('Pengiriman gagal');
        }

        window.location.replace(`${window.location.origin}${window.location.pathname}`);
      } catch (error) {
        form.action = form.action.replace('/ajax/', '/');
        form.submit();
      }
    });
  }

  const chatbotToggle = document.getElementById('chatbotToggle');
  const chatbotPanel = document.getElementById('chatbotPanel');
  const chatbotClose = document.getElementById('chatbotClose');
  const chatbotForm = document.getElementById('chatbotForm');
  const chatbotInput = document.getElementById('chatbotInput');
  const chatbotMessages = document.getElementById('chatbotMessages');
  const quickReplies = document.querySelectorAll('[data-question]');

  const addChatMessage = (message, type) => {
    const bubble = document.createElement('div');
    bubble.className = `chat-message ${type}-message`;
    bubble.textContent = message;
    chatbotMessages.appendChild(bubble);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  };

  const getBotReply = (question) => {
    const text = question.toLowerCase();
    if (text.includes('halo') || text.includes('hai') || text.includes('selamat')) {
      return 'Halo! Selamat datang di Service Center Te-Fa. Saya siap membantu tentang layanan, perangkat, biaya, proses, garansi, lokasi, dan kontak teknisi.';
    }
    if (text.includes('layanan') || text.includes('servis') || text.includes('perbaikan') || text.includes('bisa')) {
      return 'Kami melayani perbaikan, pemasangan, dan servis bergaransi untuk mesin cuci, kipas angin, TV, audio, serta elektronik rumah lainnya. Teknisi akan memeriksa perangkat terlebih dahulu sebelum memberi tindakan.';
    }
    if (text.includes('mesin cuci') || text.includes('kipas') || text.includes('tv') || text.includes('televisi') || text.includes('audio')) {
      return 'Perangkat yang dapat dikonsultasikan antara lain mesin cuci, kipas angin, TV, audio, dan elektronik rumah lainnya. Jelaskan gejala kerusakannya agar teknisi dapat membantu menentukan langkah awal.';
    }
    if (text.includes('harga') || text.includes('biaya') || text.includes('estimasi') || text.includes('berapa')) {
      return 'Biaya belum bisa ditentukan sebelum diagnosa karena bergantung pada jenis dan tingkat kerusakan. Konsultasi serta diagnosa awal gratis, dan estimasi dijelaskan terlebih dahulu sebelum perbaikan.';
    }
    if (text.includes('garansi')) {
      return 'Layanan servis kami bergaransi. Detail dan durasi garansi bergantung pada jenis perbaikan serta komponen yang digunakan, dan akan dijelaskan oleh teknisi.';
    }
    if (text.includes('proses') || text.includes('cara') || text.includes('tahap')) {
      return 'Prosesnya: perangkat diterima, teknisi melakukan diagnosa, estimasi biaya disampaikan, perbaikan dikerjakan setelah disetujui, lalu perangkat diuji sebelum dikembalikan.';
    }
    if (text.includes('lama') || text.includes('durasi') || text.includes('selesai') || text.includes('kapan')) {
      return 'Durasi pengerjaan tergantung jenis kerusakan, ketersediaan komponen, dan tingkat perbaikan. Teknisi akan memberikan perkiraan waktu setelah diagnosa.';
    }
    if (text.includes('sparepart') || text.includes('komponen') || text.includes('suku cadang')) {
      return 'Kami mengutamakan sparepart dan komponen yang sesuai serta aman untuk perangkat. Kebutuhan penggantian komponen akan dikonfirmasi kepada pelanggan terlebih dahulu.';
    }
    if (text.includes('bawa') || text.includes('antar') || text.includes('pickup') || text.includes('ambil')) {
      return 'Untuk pengantaran atau pengambilan perangkat, silakan konfirmasi terlebih dahulu melalui WhatsApp agar teknisi dapat memberikan arahan sesuai jenis dan ukuran barang.';
    }
    if (text.includes('lokasi') || text.includes('alamat') || text.includes('maps') || text.includes('peta')) {
      return 'Lokasi kami tersedia melalui Google Maps pada bagian Kontak. Pilih tombol "Lihat Lokasi Kami" untuk membuka petanya.';
    }
    if (text.includes('kontak') || text.includes('hubungi') || text.includes('teknisi') || text.includes('whatsapp') || text.includes('nomor') || text.includes('telepon')) {
      return 'Silakan hubungi teknisi melalui WhatsApp di +62 898-1056-300. Sertakan jenis perangkat, keluhan, dan foto/video jika memungkinkan agar konsultasi lebih cepat.';
    }
    if (text.includes('email') || text.includes('surat')) {
      return 'Anda juga dapat menghubungi kami melalui email tefaelinnedutase@gmail.com atau menggunakan formulir Kontak di website.';
    }
    if (text.includes('rusak') || text.includes('mati') || text.includes('tidak menyala') || text.includes('bermasalah')) {
      return 'Mohon jangan membongkar perangkat sendiri jika belum yakin. Catat gejalanya, matikan dan cabut listrik bila aman, lalu konsultasikan melalui WhatsApp agar teknisi memberi arahan awal.';
    }
    return 'Saya bisa membantu soal jenis perangkat, layanan, biaya, proses servis, durasi, garansi, sparepart, lokasi, pengantaran, email, atau kontak teknisi. Coba tuliskan pertanyaan yang lebih spesifik.';
  };

  const openChat = () => {
    chatbotPanel.hidden = false;
    chatbotToggle.setAttribute('aria-expanded', 'true');
    chatbotInput.focus();
  };

  const closeChat = () => {
    chatbotPanel.hidden = true;
    chatbotToggle.setAttribute('aria-expanded', 'false');
  };

  if (chatbotToggle && chatbotPanel) {
    chatbotToggle.addEventListener('click', () => {
      if (chatbotPanel.hidden) openChat();
      else closeChat();
    });
    chatbotClose.addEventListener('click', closeChat);

    const answerQuestion = (question) => {
      addChatMessage(question, 'user');
      addChatMessage(getBotReply(question), 'bot');
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    };

    chatbotForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const question = chatbotInput.value.trim();
      if (!question) return;
      answerQuestion(question);
      chatbotInput.value = '';
    });

    quickReplies.forEach((reply) => {
      reply.addEventListener('click', () => answerQuestion(reply.dataset.question));
    });
  }
});

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
  const aiEndpoint = document.body.dataset.aiEndpoint || '/api/chat';
  const chatHistory = [];

  const renderChatText = (text) => {
    const escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

    return escaped
      .replace(/^###?\s+(.+)$/gm, '<strong>$1</strong>')
      .replace(/^[-*]\s+(.+)$/gm, '<span class="chat-list-item">• $1</span>')
      .replace(/^(\d+)[.]\s+(.+)$/gm, '<span class="chat-list-item">$1. $2</span>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/__(.+?)__/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  };

  const addChatMessage = (message, type) => {
    const bubble = document.createElement('div');
    bubble.className = `chat-message ${type}-message`;
    bubble.innerHTML = renderChatText(message);
    chatbotMessages.appendChild(bubble);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  };

  const getBotReply = (question) => {
    const text = question.toLowerCase();
    if (text.includes('halo') || text.includes('hai') || text.includes('selamat')) {
      return 'Halo! Selamat datang di Service Center Te-Fa. Saya siap membantu tentang layanan, perangkat, biaya, proses, garansi, lokasi, dan kontak teknisi.';
    }
    if (text.includes('layanan') || text.includes('servis') || text.includes('perbaikan') || text.includes('bisa')) {
      return 'Kami melayani perbaikan, pemasangan, dan servis bergaransi untuk hampir semua elektronik rumahan, seperti mesin cuci, kipas angin, audio, dan perangkat rumah tangga lainnya. Untuk TV, HP, laptop, dan terutama PC, silakan tanyakan dahulu karena kami belum berpengalaman menanganinya.';
    }
    if (text.includes('mesin cuci') || text.includes('kipas') || text.includes('tv') || text.includes('televisi') || text.includes('audio') || text.includes('hp') || text.includes('laptop') || text.includes('pc')) {
      return 'Kami hampir dapat menangani semua alat elektronik rumahan. Untuk TV, HP, laptop, dan terutama PC, silakan konsultasikan dahulu karena kami belum berpengalaman menanganinya. Jelaskan gejala kerusakannya agar teknisi dapat membantu menentukan langkah awal.';
    }
    if (text.includes('harga') || text.includes('biaya') || text.includes('estimasi') || text.includes('berapa')) {
      return 'Rentang harga jasa adalah Rp20.000 sampai maksimal Rp75.000, belum termasuk sparepart atau komponen. Untuk estimasi yang lebih tepat, teknisi perlu mengetahui jenis perangkat, merek, gejala kerusakan, dan kebutuhan servis. Jika informasinya belum cukup, perangkat perlu didiagnosa terlebih dahulu.';
    }
    if (text.includes('garansi')) {
      return 'Servis kami memiliki garansi selama 1 minggu setelah perangkat selesai diservis di tempat kami. Jika perangkat rusak kembali dalam waktu 1 minggu setelah servis, pelanggan dapat mengajukan klaim dan penanganannya akan kami cover sesuai garansi yang ditawarkan.';
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
      return 'Silakan hubungi teknisi melalui WhatsApp di +62 877 1117 7813. Sertakan jenis perangkat, keluhan, dan foto/video jika memungkinkan agar konsultasi lebih cepat.';
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

  if (chatbotToggle && chatbotPanel && chatbotClose && chatbotForm && chatbotInput && chatbotMessages) {
    chatbotToggle.addEventListener('click', () => {
      if (chatbotPanel.hidden) openChat();
      else closeChat();
    });
    chatbotClose.addEventListener('click', closeChat);

    const answerQuestion = async (question) => {
      addChatMessage(question, 'user');
      const loadingMessage = 'Te-Fa AI sedang menyiapkan jawaban...';
      addChatMessage(loadingMessage, 'bot');
      const loadingBubble = chatbotMessages.lastElementChild;

      try {
        const response = await fetch(aiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ question, history: chatHistory })
        });
        const result = await response.json();
        if (!response.ok || !result.answer) throw new Error(result.error || 'AI tidak merespons');

        loadingBubble.innerHTML = renderChatText(result.answer);
        chatHistory.push({ role: 'user', text: question }, { role: 'model', text: result.answer });
      } catch (error) {
        loadingBubble.textContent = error.message || 'Te-Fa AI sedang tidak terhubung. Silakan hubungi WhatsApp +62 877 1117 7813.';
      }
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
document.addEventListener('DOMContentLoaded', () => {
  // 1. Tahun Otomatis di Footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Pengaturan Tema Terang / Gelap (Simpan di localStorage)
  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('ocean-theme') || 'light';
  htmlEl.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', next);
    localStorage.setItem('ocean-theme', next);
  });

  // 3. Menu Navigasi Mobile
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // 4. Efek Bayangan Navbar saat Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // 5. Generator Gelembung Laut Halus
  const bubblesContainer = document.getElementById('bubbles');
  if (bubblesContainer) {
    const bubbleCount = 14;
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement('span');
      bubble.classList.add('bubble');
      const size = Math.random() * 18 + 8;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 12 + 10}s`;
      bubble.style.animationDelay = `${Math.random() * 8}s`;
      bubblesContainer.appendChild(bubble);
    }
  }

  // 6. Animasi Muncul Saat Scroll (Intersection Observer)
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Jalankan animasi angka statistik jika ada di dalam elemen
        entry.target.querySelectorAll('.stat-number').forEach(animateCounter);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));

  function animateCounter(el) {
    if (el.dataset.done) return;
    el.dataset.done = 'true';
    const target = parseInt(el.dataset.target, 10);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 35));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = current;
      }
    }, 30);
  }

  // 7. Filter Kategori Proyek
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.filter;
      projectCards.forEach(card => {
        const match = category === 'all' || card.dataset.category === category;
        card.classList.toggle('hidden', !match);
      });
    });
  });

  // 8. Simulasi Pengiriman Form Kontak
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nama = document.getElementById('nama').value.trim();
      formFeedback.textContent = `Terima kasih, ${nama}! Pesan Anda telah tercatat (simulasi front-end).`;
      contactForm.reset();
    });
  }
});

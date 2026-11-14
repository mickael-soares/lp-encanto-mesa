/**
 * Encanto na Mesa CBA - Lógica Interativa da Landing Page
 * Desenvolvido por: Mickael Soares
 */

// 1. Filtro Interativo do Catálogo de Temas
function filterGallery(category, button) {
  const cards = document.querySelectorAll('.theme-card');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach((btn) => {
    btn.classList.remove('bg-pink-600', 'text-white');
    btn.classList.add('bg-pink-50', 'text-pink-700');
  });

  if (button) {
    button.classList.remove('bg-pink-50', 'text-pink-700');
    button.classList.add('bg-pink-600', 'text-white');
  }

  cards.forEach((card) => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// 2. Lightbox Modal para Ampliação de Fotos
const modal = document.getElementById('lightboxModal');
const modalImg = document.getElementById('lightboxImg');
const modalTitle = document.getElementById('lightboxTitle');
const modalBtn = document.getElementById('lightboxBtn');

function openLightbox(src, title) {
  if (!modal || !modalImg || !modalTitle || !modalBtn) return;
  modalImg.src = src;
  modalTitle.textContent = title;
  modalBtn.href = `https://wa.me/5565996872050?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20disponibilidade%20para%20o%20tema%20${encodeURIComponent(title)}.`;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Fechar com tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
    closeLightbox();
  }
});

// 3. Animações de Entrada (Fade-up) com IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('section, .theme-card');
  animatedElements.forEach((el) => el.classList.add('fade-up'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  animatedElements.forEach((el) => observer.observe(el));
});

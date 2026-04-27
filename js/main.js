// ================================================================
// VITALE BROTHERS - Main JavaScript
// Navigation, Scroll Animations, Filters, Form Handling
// ================================================================

// --- Active Nav Link (computed from URL path) ---
function initActiveNav() {
  const path = window.location.pathname;
  let key = 'home';
  if (path === '/' || path === '/index.html') key = 'home';
  else if (path.startsWith('/about')) key = 'about';
  else if (path.startsWith('/projects') || path.startsWith('/project-') || path.startsWith('/services')) key = 'projects';
  else if (path.startsWith('/artbeat')) key = 'artbeat';
  else if (path.startsWith('/contact')) key = 'contact';

  document.querySelectorAll('[data-nav]').forEach((el) => {
    if (el.dataset.nav === key) {
      // Don't apply active highlight to the CTA button variant
      if (!el.classList.contains('nav__cta')) {
        el.classList.add('nav__link--active');
      }
    }
  });
}

// --- Dynamic copyright year ---
function initDynamicYear() {
  const year = new Date().getFullYear();
  document.querySelectorAll('[data-dynamic-year]').forEach((el) => {
    el.textContent = year;
  });
}

// --- Navigation Scroll Effect ---
function initNavigation() {
  const nav = document.getElementById('main-nav');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('nav-mobile');

  // Sticky nav background on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // Mobile hamburger toggle
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('nav__hamburger--active');
      mobileNav.classList.toggle('nav__mobile--open');
      document.body.style.overflow = mobileNav.classList.contains('nav__mobile--open') ? 'hidden' : '';
    });

    // Close mobile nav on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('nav__hamburger--active');
        mobileNav.classList.remove('nav__mobile--open');
        document.body.style.overflow = '';
      });
    });
  }
}

// --- Scroll Reveal Animations ---
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  reveals.forEach((el) => observer.observe(el));
}

// --- Projects Filter ---
function initProjectsFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('[data-category]');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach((b) => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');

      const filter = btn.dataset.filter;

      // Animate filter
      projectCards.forEach((card) => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// --- FAQ Accordion (homepage) ---
function initFaqAccordion() {
  const buttons = document.querySelectorAll('.faq__q');
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq__item');
      if (!item) return;
      const isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
}

// --- Contact Form (Client-side validation & UX) ---
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('#contact-submit');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    // Simulate submission (replace with actual endpoint)
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      submitBtn.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
      submitBtn.style.opacity = '1';

      // Reset after 3s
      setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
      }, 3000);
    }, 1500);
  });

  // Focus effects for form fields
  const inputs = form.querySelectorAll('.contact-form__input, .contact-form__textarea, .contact-form__select');
  inputs.forEach((input) => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
    });
  });
}

// --- Hero mural slideshow ---
function initParallax() {
  const slides = document.querySelectorAll('.hero__slide');
  const dots   = document.querySelectorAll('.hero__dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(index) {
    // Remove active from current
    slides[current].classList.remove('hero__slide--active');
    dots[current]?.classList.remove('hero__dot--active');

    current = (index + slides.length) % slides.length;

    const slide = slides[current];
    slide.classList.add('hero__slide--active');
    dots[current]?.classList.add('hero__dot--active');

    // Re-trigger Ken Burns by cloning the img (forces CSS animation restart)
    const img = slide.querySelector('.hero__slide-img');
    if (img) {
      const clone = img.cloneNode(true);
      img.parentNode.replaceChild(clone, img);
    }
  }

  function next() { goTo(current + 1); }

  // Auto-advance every 6 seconds
  function startTimer() { timer = setInterval(next, 6000); }
  function resetTimer()  { clearInterval(timer); startTimer(); }

  // Dot click navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); resetTimer(); });
  });

  startTimer();
}

// --- Magnetic button hover effect ---
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn--primary');
  
  buttons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translateY(-2px) translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// --- Counter animation for stats ---
function initCounters() {
  const statNumbers = document.querySelectorAll('.hero__stat-number');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const text = el.textContent;
          const match = text.match(/(\d+)/);
          if (!match) return;

          const target = parseInt(match[1]);
          const suffix = text.replace(/\d+/, '');
          let current = 0;
          const duration = 2000;
          const step = target / (duration / 16);

          const counter = () => {
            current += step;
            if (current >= target) {
              el.textContent = target + suffix;
              return;
            }
            el.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(counter);
          };

          counter();
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((el) => observer.observe(el));
}

// --- Custom cursor trail (subtle) ---
function initCursorTrail() {
  // Only on desktop
  if (window.matchMedia('(max-width: 768px)').matches) return;

  const trail = document.createElement('div');
  trail.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid rgba(59, 130, 246, 0.3);
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.15s ease, opacity 0.3s ease;
    opacity: 0;
  `;
  document.body.appendChild(trail);

  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    trail.style.opacity = '1';
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    trail.style.opacity = '0';
  });

  function animate() {
    trail.style.left = mouseX - 10 + 'px';
    trail.style.top = mouseY - 10 + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  // Scale up on hoverable elements
  const hoverables = document.querySelectorAll('a, button, .work-card, .service-card, .blog-card');
  hoverables.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      trail.style.transform = 'scale(2)';
      trail.style.borderColor = 'rgba(239, 68, 68, 0.4)';
    });
    el.addEventListener('mouseleave', () => {
      trail.style.transform = 'scale(1)';
      trail.style.borderColor = 'rgba(59, 130, 246, 0.3)';
    });
  });
}

// --- Initialize All ---
document.addEventListener('DOMContentLoaded', () => {
  initActiveNav();
  initDynamicYear();
  initNavigation();
  initScrollReveal();
  initProjectsFilter();
  initFaqAccordion();
  initContactForm();
  initParallax();
  initMagneticButtons();
  initCounters();
  initCursorTrail();
  initLightbox();
});

// --- Lightbox Gallery ---
function initLightbox() {
  const images = Array.from(document.querySelectorAll('.gallery-img-wrap img, .featured-shot img, .work-card__image'));
  if (!images.length) return;

  images.forEach(img => {
    // Only add zoom-in cursor to actual gallery images, not work cards (which are links)
    if (!img.closest('.work-card')) {
      img.style.cursor = 'zoom-in';
    }
  });

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  
  const lightboxImg = document.createElement('img');
  lightboxImg.className = 'lightbox__image';
  
  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox__close';
  closeBtn.innerHTML = '&times;';
  closeBtn.setAttribute('aria-label', 'Close gallery');
  
  const prevBtn = document.createElement('button');
  prevBtn.className = 'lightbox__nav lightbox__prev';
  prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
  prevBtn.setAttribute('aria-label', 'Previous image');
  
  const nextBtn = document.createElement('button');
  nextBtn.className = 'lightbox__nav lightbox__next';
  nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
  nextBtn.setAttribute('aria-label', 'Next image');
  
  lightbox.appendChild(closeBtn);
  lightbox.appendChild(prevBtn);
  lightbox.appendChild(lightboxImg);
  lightbox.appendChild(nextBtn);
  document.body.appendChild(lightbox);

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
    lightbox.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-active');
    document.body.style.overflow = '';
    setTimeout(() => {
      lightboxImg.src = '';
    }, 300);
  }

  function nextImage(e) {
    if (e) e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
  }

  function prevImage(e) {
    if (e) e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
  }

  images.forEach((img, index) => {
    img.addEventListener('click', (e) => {
      // Don't open lightbox if clicking on a work card link
      if (img.closest('.work-card')) return;
      
      e.preventDefault();
      openLightbox(index);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  nextBtn.addEventListener('click', nextImage);
  prevBtn.addEventListener('click', prevImage);

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });
}

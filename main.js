/* ==========================================================================
   PORTFOLIO LOGIC
   Sections: 1) Preloader  2) Data injection  3) Typing effect
             4) Scroll reveal  5) Nav (mobile + active link + progress ruler)
             6) Project filter + lightbox  7) Contact form  8) Back to top
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------------------------
     1. PRELOADER
  ------------------------------------------------------------- */
  const words = document.querySelectorAll('.intro-word');
  const introScreen = document.getElementById('intro-screen');
  const body = document.getElementById('body');
  let delay = 300;

  words.forEach((word) => {
    setTimeout(() => word.classList.add('active'), delay);
    delay += 600;
    setTimeout(() => { word.classList.remove('active'); word.classList.add('exit'); }, delay);
    delay += 150;
  });

  setTimeout(() => {
    introScreen.classList.add('hide-intro');
    body.classList.remove('no-scroll');
    setTimeout(typeEffect, 400);
  }, delay + 300);

  /* -------------------------------------------------------------
     2. DATA INJECTION
  ------------------------------------------------------------- */
  const p = portfolioData.personal;

  document.getElementById('nav-name').textContent = p.shortName;
  document.getElementById('hero-name').textContent = p.name;
  document.getElementById('hero-img').src = p.profileImage;
  document.getElementById('hero-img').alt = p.name;
  document.getElementById('hero-location-text').textContent = p.location;
  document.getElementById('about-text').textContent = p.aboutMe;
  document.getElementById('footer-name').textContent = p.name;
  document.getElementById('foot-tagline').textContent = `${p.tagline} · ${p.location}`;
  document.getElementById('current-year').textContent = new Date().getFullYear();
  document.getElementById('google-map').src = portfolioData.mapEmbedLink;

  document.querySelectorAll('.resume-link').forEach(el => el.href = p.resume);

  // Title block (About section)
  document.getElementById('tb-name').textContent = p.name;
  document.getElementById('tb-role').textContent = p.role;
  document.getElementById('tb-phone').textContent = p.phone;
  document.getElementById('tb-email').textContent = p.email;
  document.getElementById('tb-location').textContent = p.location;
  document.getElementById('tb-date').textContent = new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

  // Contact info list
  const contactIcons = { Name: 'fa-user', Phone: 'fa-phone', Email: 'fa-envelope', Location: 'fa-location-dot' };
  const contactFields = { Name: p.name, Phone: p.phone, Email: p.email, Location: p.location };
  document.getElementById('contact-info-list').innerHTML = Object.entries(contactFields).map(([label, value]) => `
    <div class="info-item glass">
      <div class="info-icon"><i class="fa-solid ${contactIcons[label]}"></i></div>
      <div><span class="lbl">${label}</span><span class="val">${value}</span></div>
    </div>
  `).join('');

  // Social links (hero)
  const socialIcons = { facebook: 'fa-facebook-f', linkedin: 'fa-linkedin-in', behance: 'fa-behance', instagram: 'fa-instagram' };
  let socialsHTML = '';
  for (const key in portfolioData.socials) {
    if (portfolioData.socials[key]) {
      socialsHTML += `<a href="${portfolioData.socials[key]}" target="_blank" rel="noopener" class="social-btn" aria-label="${key}"><i class="fa-brands ${socialIcons[key]}"></i></a>`;
    }
  }
  document.getElementById('hero-socials').innerHTML = socialsHTML;

  // Skills
  document.getElementById('skills-container').innerHTML = portfolioData.skills.map(skill => `
    <div class="skill-card fade-in">
      <div class="skill-icon"><i class="${skill.icon}"></i></div>
      <h3>${skill.title}</h3>
      <p>${skill.desc}</p>
    </div>
  `).join('');

  // Certifications
  document.getElementById('cert-grid').innerHTML = portfolioData.certifications.map(cert => `
    <div class="cert-card fade-in">
      <div class="cert-seal"><i class="${cert.icon}"></i></div>
      <h3>${cert.title}</h3>
      <div class="cert-meta">${cert.issuer} &middot; ${cert.year}</div>
    </div>
  `).join('');

  observeFadeIns();

  /* -------------------------------------------------------------
     3. TYPING EFFECT
  ------------------------------------------------------------- */
  let typeTextIdx = 0, charIdx = 0, isDeleting = false;
  const typedSpan = document.getElementById('typed-text');

  function typeEffect() {
    const currentWord = portfolioData.typingTexts[typeTextIdx];
    typedSpan.textContent = isDeleting
      ? currentWord.substring(0, --charIdx)
      : currentWord.substring(0, ++charIdx);

    let speed = isDeleting ? 30 : 70;
    if (!isDeleting && charIdx === currentWord.length) { speed = 2000; isDeleting = true; }
    else if (isDeleting && charIdx === 0) { isDeleting = false; typeTextIdx = (typeTextIdx + 1) % portfolioData.typingTexts.length; speed = 400; }
    setTimeout(typeEffect, speed);
  }

  /* -------------------------------------------------------------
     4. SCROLL REVEAL
  ------------------------------------------------------------- */
  function observeFadeIns() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('appear'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-in:not(.appear)').forEach(el => observer.observe(el));
  }

  /* -------------------------------------------------------------
     5. NAV: mobile menu, active link, scroll progress ruler
  ------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  document.querySelectorAll('#mobile-menu a').forEach(link => link.addEventListener('click', () => mobileMenu.classList.remove('open')));

  const navLinks = document.querySelectorAll('.nav-links a, #mobile-menu a');
  const navSections = document.querySelectorAll('main section[id]');
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navSections.forEach(sec => navObserver.observe(sec));

  const ruler = document.getElementById('scroll-ruler');
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    ruler.style.width = `${(scrollTop / docHeight) * 100}%`;
    backToTop.classList.toggle('show', scrollTop > 600);
  }, { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* -------------------------------------------------------------
     6. PROJECT FILTER + LIGHTBOX
  ------------------------------------------------------------- */
  const projectGrid = document.getElementById('project-grid');
  const filterRow = document.getElementById('filter-row');
  let activeCategory = 'All';
  let visibleProjects = portfolioData.projects;

  function renderFilters() {
    const categories = ['All', ...new Set(portfolioData.projects.map(pr => pr.category))];
    filterRow.innerHTML = categories.map(cat =>
      `<button class="filter-tab ${cat === activeCategory ? 'active' : ''}" data-cat="${cat}">${cat}</button>`
    ).join('');
    filterRow.querySelectorAll('.filter-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.cat;
        renderFilters();
        renderProjects();
      });
    });
  }

  function renderProjects() {
    visibleProjects = activeCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter(pr => pr.category === activeCategory);

    projectGrid.innerHTML = visibleProjects.map((project, i) => `
      <div class="project-card fade-in appear" data-index="${i}">
        <div class="sheet-strip"><span>${project.code}</span><span class="cat">${project.category}</span></div>
        <div class="img-scroll-container" data-open-lightbox="${i}">
          <img src="${project.img}" alt="${project.title}" loading="lazy">
        </div>
        <div class="project-body">
          <h3>${project.title}</h3>
          <p class="ptype">${project.type}</p>
          <button class="view-btn" data-open-lightbox="${i}"><i class="fa-solid fa-eye"></i> View Drawing</button>
        </div>
      </div>
    `).join('');

    projectGrid.querySelectorAll('[data-open-lightbox]').forEach(el => {
      el.addEventListener('click', () => openLightbox(Number(el.dataset.openLightbox)));
    });
  }

  renderFilters();
  renderProjects();

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  let lightboxIndex = 0;

  function openLightbox(index) {
    lightboxIndex = index;
    updateLightbox();
    lightbox.classList.add('open');
    document.getElementById('body').classList.add('no-scroll');
  }
  function updateLightbox() {
    const project = visibleProjects[lightboxIndex];
    lightboxImg.src = project.img;
    lightboxImg.alt = project.title;
    lightboxCaption.textContent = `${project.code} — ${project.title} · ${project.type}`;
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
    document.getElementById('body').classList.remove('no-scroll');
  }
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev').addEventListener('click', () => { lightboxIndex = (lightboxIndex - 1 + visibleProjects.length) % visibleProjects.length; updateLightbox(); });
  document.getElementById('lightbox-next').addEventListener('click', () => { lightboxIndex = (lightboxIndex + 1) % visibleProjects.length; updateLightbox(); });
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') document.getElementById('lightbox-prev').click();
    if (e.key === 'ArrowRight') document.getElementById('lightbox-next').click();
  });

  /* -------------------------------------------------------------
     7. CONTACT FORM (FormSubmit.co)
  ------------------------------------------------------------- */
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnIcon = document.getElementById('btn-icon');
    const statusBox = document.getElementById('form-status');

    btn.disabled = true;
    btnText.textContent = 'Sending...';
    btnIcon.className = 'fas fa-spinner fa-spin';
    statusBox.classList.remove('show', 'ok', 'err');

    const formData = {
      Name: document.getElementById('form-name').value,
      Phone: document.getElementById('form-phone').value,
      Email: document.getElementById('form-email').value,
      Message: document.getElementById('form-message').value,
      _subject: 'New Message from Portfolio Website!'
    };

    fetch(`https://formsubmit.co/ajax/${p.email}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(() => {
        statusBox.textContent = 'Message sent successfully! I will contact you soon.';
        statusBox.classList.add('show', 'ok');
        this.reset();
      })
      .catch(err => {
        console.error(err);
        statusBox.textContent = 'Oops! Something went wrong. Please try again.';
        statusBox.classList.add('show', 'err');
      })
      .finally(() => {
        btn.disabled = false;
        btnText.textContent = 'Send Message';
        btnIcon.className = 'fas fa-paper-plane';
        setTimeout(() => statusBox.classList.remove('show'), 5000);
      });
  });

});

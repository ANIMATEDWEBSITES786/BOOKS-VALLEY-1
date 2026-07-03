const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.getElementById("year").textContent = new Date().getFullYear();

// Parallax mouse movement for product items in hero
;(function () {
  const hero = document.querySelector('.hero');
  const items = document.querySelectorAll('.product-showcase .item');
  if (!hero || items.length === 0) return;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    items.forEach((el) => {
      const speed = parseFloat(el.dataset.speed) || 8;
      const tx = (dx / rect.width) * speed;
      const ty = (dy / rect.height) * speed;
      el.style.transform = `translate(${tx}px, ${ty}px)`;
    });
  });

  hero.addEventListener('mouseleave', () => {
    items.forEach((el) => (el.style.transform = 'translate(0,0)'));
  });
})();

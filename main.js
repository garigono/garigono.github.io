const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .timeline-item').forEach(el => observer.observe(el));

  document.querySelectorAll('.expertise-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.07}s`;
  });

  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target;
    btn.textContent = 'Sent ✓';
    btn.style.background = '#2d5c42';
    btn.disabled = true;
  }

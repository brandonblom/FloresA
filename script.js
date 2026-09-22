const letterLink = document.querySelector('.primary-button');

if (letterLink && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  letterLink.addEventListener('click', () => {
    for (let i = 0; i < 14; i += 1) {
      const petal = document.createElement('span');
      petal.className = 'falling-petal';
      petal.style.setProperty('--left', `${8 + Math.random() * 84}vw`);
      petal.style.setProperty('--delay', `${Math.random() * 0.7}s`);
      petal.style.setProperty('--duration', `${3 + Math.random() * 1.6}s`);
      petal.style.setProperty('--drift', `${Math.random() * 180 - 90}px`);
      petal.setAttribute('aria-hidden', 'true');
      document.body.append(petal);
      petal.addEventListener('animationend', () => petal.remove(), { once: true });
    }
  });
}

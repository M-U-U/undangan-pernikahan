document.addEventListener('DOMContentLoaded', () => {

  // 1. OPEN UNDANGAN & PLAY MUSIC
  const coverOverlay = document.getElementById('coverOverlay');
  const btnOpen = document.getElementById('btnOpen');
  const bgMusic = document.getElementById('bgMusic');
  const musicToggle = document.getElementById('musicToggle');

  let isPlaying = false;

  btnOpen.addEventListener('click', () => {
    coverOverlay.classList.add('hide');
    bgMusic.play();
    isPlaying = true;
    musicToggle.textContent = '🎵';
  });

  musicToggle.addEventListener('click', () => {
    if (isPlaying) {
      bgMusic.pause();
      musicToggle.textContent = '🔇';
    } else {
      bgMusic.play();
      musicToggle.textContent = '🎵';
    }
    isPlaying = !isPlaying;
  });

  // 2. COUNTDOWN TIMER (30 OKTOBER 2030)
  const targetDate = new Date("October 30, 2030 08:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById('days').innerText = '00';
      document.getElementById('hours').innerText = '00';
      document.getElementById('minutes').innerText = '00';
      document.getElementById('seconds').innerText = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // 3. NAVBAR HIGHLIGHT SAAT SCROLL
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

});
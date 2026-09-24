// Particle Cursor
const container = document.getElementById('particle-cursor');

document.addEventListener('mousemove', (e) => {
  createParticle(e.clientX, e.clientY);
});

function createParticle(x, y) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  
  const size = Math.random() * 15 + 5;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  
  const moveX = (Math.random() - 0.5) * 100;
  const moveY = (Math.random() - 0.5) * 100;
  particle.style.setProperty('--move-x', `${moveX}px`);
  particle.style.setProperty('--move-y', `${moveY}px`);
  
  container.appendChild(particle);
  
  setTimeout(() => {
    particle.remove();
  }, 1000);
}

// Age

const birthDate = new Date('2011-09-12');
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();

if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

const ageSpan = document.querySelector('.age');
if (ageSpan) {
  ageSpan.textContent = `${age} years old`;
}

// Parallax Background

const root = document.querySelector("#root");

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;

const BACKGROUND_STRENGTH = 30;
const ROOT_STRENGTH = 8;

window.addEventListener("pointermove", (event) => {
  targetX = (event.clientX / window.innerWidth) * 2 - 1;
  targetY = (event.clientY / window.innerHeight) * 2 - 1;
});

function animateParallax() {
  currentX += (targetX - currentX) * 0.05;
  currentY += (targetY - currentY) * 0.05;

  document.body.style.setProperty(
    "--bg-x",
    `${-currentX * BACKGROUND_STRENGTH}px`
  );

  document.body.style.setProperty(
    "--bg-y",
    `${-currentY * BACKGROUND_STRENGTH}px`
  );

  if (root) {
    root.style.setProperty(
      "--root-x",
      `${-currentX * ROOT_STRENGTH}px`
    );

    root.style.setProperty(
      "--root-y",
      `${-currentY * ROOT_STRENGTH}px`
    );
  }

  requestAnimationFrame(animateParallax);
}

animateParallax();

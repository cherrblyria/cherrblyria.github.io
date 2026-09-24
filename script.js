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

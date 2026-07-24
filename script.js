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

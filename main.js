const thunderJolt = document.getElementById('thunder-jolt');
const regularKick = document.getElementById('regular-kick');

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  elProgressBar: document.getElementById('progressbar-character'),
};
const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-enemy'),
  elProgressBar: document.getElementById('progressbar-enemy'),
};

thunderJolt.addEventListener('click', () => {
  changeHP(random(30), character);
  changeHP(random(30), enemy);
});
regularKick.addEventListener('click', () => {
  changeHP(random(10), enemy);
});

function init() {
  renderHP(character);
  renderHP(enemy);
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressBar(person);
}
function renderHPLife(person) {
  person.elHP.innerText = person.damageHP + ' / ' + character.defaultHP;
}
function renderProgressBar(person) {
  person.elProgressBar.style.width = person.damageHP + '%';
}
function changeHP(count, person) {
  if (person.damageHP < count) {
    person.damageHP = 0;
    alert(person.name + ' проиграл');
    thunderJolt.disabled = true;
  } else {
    person.damageHP -= count;
  }
  renderHP(person);
}
function random(num) {
  return Math.ceil(Math.random() * num);
}

init();
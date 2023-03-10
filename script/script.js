const API_URL = "https://api.brchallenges.com/api/blizzard/games"

const downloadBtn = document.getElementById("download-system");
const heroContent = document.getElementById("hero-content");
const asideContent = document.getElementById("extra-content");
const gameSelection1 = document.getElementById("game1");
const gameSelection2 = document.getElementById("game2");
const gameSelection3 = document.getElementById("game3");
const gamesDiv = document.getElementById("games-content");
const gameNav = document.getElementById("drop-games");
const sportsNav = document.getElementById("drop-esports");
const modalBtn = document.getElementById("close-modal");
const modalPop = document.getElementById("modal");
const loginBtn = document.getElementById("login");
const menuDrop = document.getElementById("menu");
const header = document.querySelector(".header");
const menuContent = document.querySelector(".menu-content");
const menuSports = document.querySelector(".menu-sports");

// FUNCTIONS
function changeSelection() {
  const gameElements = document.querySelectorAll(".game-icons li");

  gameElements.forEach((element) => {
    element.addEventListener('click', () => {
      gameElements.forEach((el) => el.classList.remove("active-game"));
      element.classList.add("active-game");
    });
  });
}

function getSystem() {
  let OS = "Desconhecido";
  let sysPath = "";

  if (navigator.userAgent.search("Win") != -1) {
    OS = "Windows"; 
    sysPath = "windows";
  }
  if (navigator.userAgent.search("Mac") != -1) {
    OS = "MacOS";
    sysPath = "apple";
  }
  if (navigator.userAgent.search("X11") != -1) {
    OS = "UNIX";
    sysPath = "unix";
  }
  if (navigator.userAgent.search("Linux") != -1) {
    OS = "Linux";
    sysPath = "linux";
  }

  downloadBtn.innerHTML = `<img src="./assets/icons/${sysPath}.svg" alt="Logo do Sistema">Baixar para o<span>${OS}</span>`;
}

async function setGamesData() {
  const res = await fetch(API_URL);
  const data = await res.json();

  data.slice(0).reverse().map((game) => {
    imgSrc = game.image;
    nameSrc = game.name;
    categorySrc = game.category
    logoSrc = game.logo;

    gamesDiv.insertAdjacentHTML("afterbegin", `
    <div class="game-card">
      <div class="game-image">
        <a href="#">
          <img src=${imgSrc} alt="">
          <img id="game-logo" src=${logoSrc} alt="">
        </a>
      </div>
      <p class="game-title">${nameSrc}</p>
      <p class="game-description">${categorySrc}</p>
    </div>
`);
  })
}

// EVENTS
// DAQUI PRA BAIXO FICOU EXTREMAMENTE AMADOR

gameSelection1.addEventListener('click', () => {
  document.getElementById('hero-bg').style.backgroundImage =
  "url(./assets/banner-hero/games/diablo-bg.png)";

  heroContent.innerHTML = `
  <h1 id="hero-title">Retorne ?? escurid??o com o game Diablo IV</h1>
  <p id="hero-description">O retorno de Lilith traz uma era de escurid??o e sofrimento</p>
  <button id="hero-btn">Jogue agora</button>`;

  asideContent.innerHTML = `
  <div class="trailer-img"><img src="./assets/banner-hero/games/diablo-logo.png" alt="Diablo logo"></div>
  <div class="trailer-content">
    <p>ASSISTA O TRAILER</p>
    <div class="trailer-cover">
      <img class="trailer-image" src="assets/banner-hero/games/diablo-animation-cover.png" alt="">
      <img class="trailer-gif" src="assets/banner-hero/games/diablo-animation.gif" alt="">
    </div>
  </div>`;
})

gameSelection2.addEventListener('click', () => {
  document.getElementById('hero-bg').style.backgroundImage =
  "url(./assets/banner-hero/games/hearthstone-bg.png)";

  heroContent.innerHTML = `
  <h1 id="hero-title">Novo pacote de expans??o de HearthStone</h1>
  <p id="hero-description">A Horda e a Alian??a se encontraram no Vale Alterac para lutar</p>
  <button id="hero-btn">Reserve agora na pr??-venda</button>`

  asideContent.innerHTML = `
  <div class="trailer-img"><img src="./assets/banner-hero/games/hearthstone-logo.png" alt="Diablo logo"></div>
  <div class="trailer-content">
    <p>ASSISTA O TRAILER</p>
    <div class="trailer-cover">
      <img class="trailer-image" src="assets/banner-hero/games/hearthstone-animation-cover.png" alt="">
      <img class="trailer-gif" src="assets/banner-hero/games/hearthstone-animation.gif" alt="">
    </div>
  </div>`;
})

gameSelection3.addEventListener('click', () => {
  document.getElementById('hero-bg').style.backgroundImage =
  "url(./assets/banner-hero/games/wow-bg.png)";

  heroContent.innerHTML = `
  <h1 id="hero-title">Desbrave as Terras Sombrias em Shadowlands!</h1>
  <p id="hero-description">O que jaz al??m do mundo que voc?? conhece?</p>
  <button id="hero-btn">Reserve na pr??-venda</button>`
  
  asideContent.innerHTML = `
  <div class="trailer-img"><img src="./assets/banner-hero/games/wow-logo.png" alt="WoW logo"></div>
  <div class="trailer-content">
    <p>ASSISTA O TRAILER</p>
    <div class="trailer-cover">
    <img class="trailer-image" src="assets/banner-hero/games/wow-animation-cover.png" alt="">
    <img class="trailer-gif" src="assets/banner-hero/games/wow-animation.gif" alt="">
  </div>
  </div>`;
})

loginBtn.addEventListener('click', () => {
  modalPop.classList.add('active');
})

modalBtn.addEventListener('click', () => {
  modalPop.classList.remove('active');
})

// NAVEGA????O BUGADA
gameNav.addEventListener('click', () => {
  sportsNav.classList.remove('menu-active')
  menuDrop.classList.toggle('menu-active')
  menuDrop.classList.toggle('up')
  document.getElementById('hero-bg').classList.toggle('menu-active')
  header.classList.toggle('menu-active')
  gameNav.classList.toggle('menu-active')
  menuSports.classList.toggle('hidden')
})

sportsNav.addEventListener('click', () => {
  gameNav.classList.remove('menu-active')
  menuDrop.classList.toggle('menu-active')
  menuDrop.classList.toggle('up')
  document.getElementById('hero-bg').classList.toggle('menu-active')
  header.classList.toggle('menu-active')
  sportsNav.classList.toggle('menu-active')
  menuContent.classList.toggle('hidden')
})


changeSelection();
setGamesData()
getSystem();
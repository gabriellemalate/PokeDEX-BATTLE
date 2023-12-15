// Function to create an element with attributes and append it to a parent
function createElement(tag, attributes, parent) {
  const element = document.createElement(tag);
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}
// Function to build the HTML structure
function buildHTMLStructure() {
  // header
  const header = createElement("header", null, document.body);
  const nav = createElement("nav", { class: "nav" }, header);
  const navSmooth = createElement("div", { class: "nav__smooth" }, nav);

  // Add logo to the header
  const logoLink = createElement("a", { href: "../home.html" }, navSmooth);
  const logoImg = createElement(
    "img",
    {
      class: "nav__logo",
      src: "../assets/Pokedex_tool_icon-icons.com_67529.png",
    },
    logoLink
  );

  // navigation items
  const navItems = createElement("ul", { class: "nav__items" }, navSmooth);
  const navItemLeft = createElement(
    "li",
    { class: "nav__items--left" },
    navItems
  );
  createElement("a", { href: "../home.html" }, navItemLeft).innerText =
    "POKEDEX";
  const navItemRight = createElement(
    "li",
    { class: "nav__items--right" },
    navItems
  );
  createElement("a", {}, navItemRight).innerText = "BATTLE!";

  // footer
  const footer = createElement("footer", { class: "footer" }, document.body);
  const footerColumns = createElement(
    "article",
    { class: "footer__columns" },
    footer
  );

  // footer column 1
  const footerColumn1 = createElement(
    "div",
    { class: "footer__column" },
    footerColumns
  );
  createElement("p", null, footerColumn1).innerText = "Gabrielle Malate";
  createElement(
    "p",
    { class: "footer__column--info" },
    footerColumn1
  ).innerText = "Flexbox/Sass/BEM/HTML";
  createElement(
    "p",
    { class: "footer__column--info" },
    footerColumn1
  ).innerText = "DOM: site setup. CSS animation";

  // footer column 2
  const footerColumn2 = createElement(
    "div",
    { class: "footer__column" },
    footerColumns
  );
  createElement("p", null, footerColumn2).innerText = "Tomas Martinez";

  // footer column 3
  const footerColumn3 = createElement(
    "div",
    { class: "footer__column" },
    footerColumns
  );
  createElement("p", null, footerColumn3).innerText = "Steven Faliszewski";
}

const battleButt = document.querySelector("#choose-form");
battleButt.addEventListener("submit", handlePSearchEvent);

const battleApiInstance = new PokemonApi();

buildHTMLStructure();

makeFirstNetworkRequest(pickOpponent());

// On search button clicked
async function handlePSearchEvent(event) {
  event.preventDefault();
  console.log("reched");
  makeSecondNetworkRequest(event.target.text.value);
}

async function makeFirstNetworkRequest(pokemonName) {
  const result = await battleApiInstance.getPokemon(pokemonName);

  gatherOpponentDisplayData(result.data);
}

async function makeSecondNetworkRequest(pokemonName) {
  const result = await battleApiInstance.getPokemon(pokemonName);

  gatherPlayerDisplayData(result.data);
}

function gatherOpponentDisplayData(displayDataObj) {
  const displayableData = {
    name: displayDataObj.name,
    hp: displayDataObj.stats[0].base_stat,
    attack: displayDataObj.stats[1].base_stat,
    defense: displayDataObj.stats[2].base_stat,
    speed: displayDataObj.stats[5].base_stat,
    imgSrc: displayDataObj.sprites.other["official-artwork"].front_default,
  };

  console.log(displayableData);
  // Display with data from network
  renderOpponentData(displayableData);
}

function gatherPlayerDisplayData(displayDataObj) {
  const displayableData = {
    name: displayDataObj.name,
    hp: displayDataObj.stats[0].base_stat,
    attack: displayDataObj.stats[1].base_stat,
    defense: displayDataObj.stats[2].base_stat,
    speed: displayDataObj.stats[5].base_stat,
    imgSrc: displayDataObj.sprites.other["official-artwork"].front_default,
  };

  console.log(displayableData);
  // Display with data from network
  renderPlayerData(displayableData);
}

function renderOpponentData(displayableData) {
  // const image = document.querySelector("#");
  const name = document.querySelector("#opp-name");
  const hp = document.querySelector("#opp-hp");
  const attack = document.querySelector("#opp-attack");
  const defense = document.querySelector("#opp-defense");
  const speed = document.querySelector("#opp-speed");
  const image = document.querySelector(".opponent__image");

  name.innerText = ` ${displayableData.name}`;
  hp.innerText = ` ${displayableData.hp}`;
  attack.innerText = ` ${displayableData.attack}`;
  defense.innerText = ` ${displayableData.defense}`;
  speed.innerText = ` ${displayableData.speed}`;
  image.setAttribute("src", displayableData.imgSrc);
}

function renderPlayerData(displayableData) {
  const name = document.querySelector("#choose-name");
  const hp = document.querySelector("#choose-hp");
  const attack = document.querySelector("#choose-attack");
  const defense = document.querySelector("#choose-defense");
  const speed = document.querySelector("#choose-speed");
  const image = document.querySelector(".user_image");

  name.innerText = ` ${displayableData.name}`;
  hp.innerText = ` ${displayableData.hp}`;
  attack.innerText = ` ${displayableData.attack}`;
  defense.innerText = ` ${displayableData.defense}`;
  speed.innerText = ` ${displayableData.speed}`;
  image.setAttribute("src", displayableData.imgSrc);
}

function pickOpponent() {
  const min = 1;
  const max = 1000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(pickOpponent());

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
function buildHTMLStructure(pokemonObj) {
  // header
  const header = createElement("header", null, document.body);
  const nav = createElement("nav", { class: "nav" }, header);
  const navSmooth = createElement("div", { class: "nav__smooth" }, nav);

  // logo
  const logoLink = createElement("a", { href: "./home.html" }, navSmooth);
  const logoImg = createElement(
    "img",
    {
      class: "nav__logo",
      src: "./assets/Pokedex_tool_icon-icons.com_67529.png",
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
  createElement("a", { href: "./home.html" }, navItemLeft).innerText =
    "POKEDEX";
  const navItemRight = createElement(
    "li",
    { class: "nav__items--right" },
    navItems
  );
  createElement(
    "a",
    { href: "../pages/battler.html" },
    navItemRight
  ).innerText = "BATTLE!";

  // main section
  const main = createElement("main", { class: "main" }, document.body);

  // search section
  const search = createElement("section", { class: "search" }, main);
  const searchTop = createElement("div", { class: "search__top" }, search);
  const searchLights = createElement("div", null, searchTop);
  createElement(
    "img",
    { class: "search__light", src: "./assets/aqua.png", alt: "light" },
    searchLights
  );
  createElement(
    "img",
    {
      class: "search__light--blink",
      src: "./assets/cyan.png",
      alt: "blinking light",
    },
    searchLights
  );
  createElement("h4", { class: "search__top--head" }, searchTop).innerText =
    "POKEMON SEARCH";
  const searchForm = createElement(
    "form",
    { class: "search__form", action: "", method: "" },
    search
  );
  const searchTextArea = createElement(
    "textarea",
    {
      class: "search__form--box",
      type: "search",
      placeholder: "Enter Pokemon Name",
      style: "resize: none;",
      name: "text",
    },
    searchForm
  );
  const searchButton = createElement(
    "button",
    { class: "search__form--button", type: "submit" },
    searchForm
  );
  createElement("svg", { viewBox: "0 0 1024 1024" }, searchButton).innerText =
    "SEARCH!";
  createElement(
    "path",
    {
      class: "path1",
      d: "M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z",
    },
    searchButton
  );

  // photo section
  const photo = createElement("section", { class: "photo" }, main);
  const photoPlatform = createElement(
    "div",
    { class: "photo__platform" },
    photo
  );
  createElement(
    "img",
    { src: pokemonObj.imgSrc, class: "photo__platform__image" },
    photoPlatform
  );

  // stats section
  const stats = createElement("section", { class: "stats" }, main);
  const statsEq = createElement("div", { class: "stats__eq" }, stats);
  createElement("h4", { class: "stats__head" }, statsEq).innerText = "STATS";
  const statsInfo = createElement("article", { class: "stats__info" }, statsEq);
  createElement(
    "p",
    { class: "stats__title" },
    statsInfo
  ).innerHTML = `Name: <span class='stats__data'  id="name">${pokemonObj.name}</span>`;
  createElement(
    "p",
    { class: "stats__title" },
    statsInfo
  ).innerHTML = `HP: <span class='stats__data' id="hp">${pokemonObj.hp}</span>`;
  createElement(
    "p",
    { class: "stats__title" },
    statsInfo
  ).innerHTML = `Attack: <span class='stats__data' id="attack">${pokemonObj.attack}</span>`;
  createElement(
    "p",
    { class: "stats__title" },
    statsInfo
  ).innerHTML = `Defense: <span class='stats__data' id="defense">${pokemonObj.defense}</span>`;
  createElement(
    "p",
    { class: "stats__title" },
    statsInfo
  ).innerHTML = `Speed: <span class='stats__data' id="speed">${pokemonObj.speed}</span>`;

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
  createElement(
    "p",
    { class: "footer__column--info" },
    footerColumn3
  ).innerText = "Web API. Javascript programming";
  searchForm.addEventListener("submit", handleSearchEvent);
}
let apiInstance = new PokemonApi();

// makeNetworkRequest("squirtle");
buildHTMLStructure({
  name: "Squirtle",
  hp: 44,
  attack: 48,
  defense: 65,
  speed: 43,
  imgSrc:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
});

async function makeNetworkRequest(pokemonName) {
  const result = await apiInstance.getPokemon(pokemonName);

  gatherDisplayData(result.data);
}

// On search button clicked
async function handleSearchEvent(event) {
  event.preventDefault();
  makeNetworkRequest(event.target.text.value);
}

// Make an object of data to display from network response
function gatherDisplayData(displayDataObj) {
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
  renderNetworkData(displayableData);
}

function renderNetworkData(displayableData) {
  const image = document.querySelector(".photo__platform__image");
  const name = document.querySelector("#name");
  const hp = document.querySelector("#hp");
  const attack = document.querySelector("#attack");
  const defense = document.querySelector("#defense");
  const speed = document.querySelector("#speed");

  name.innerText = displayableData.name;
  hp.innerText = displayableData.hp;
  attack.innerText = displayableData.attack;
  hp.innerText = displayableData.hp;
  defense.innerText = displayableData.defense;
  speed.innerText = displayableData.speed;
  image.setAttribute("src", displayableData.imgSrc);
}

// script.js

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
    const logoLink = createElement("a", { href: "./home.html" }, navSmooth);
    const logoImg = createElement("img", { class: "nav__logo", src: "./assets/Pokedex_tool_icon-icons.com_67529.png" }, logoLink);

    // navigation items
    const navItems = createElement("ul", { class: "nav__items" }, navSmooth);
    const navItemLeft = createElement("li", { class: "nav__items--left" }, navItems);
    createElement("a", { href: "./home.html" }, navItemLeft).innerText = "POKEDEX";
    const navItemRight = createElement("li", { class: "nav__items--right" }, navItems);
    createElement("a", {}, navItemRight).innerText = "BATTLE!";

    // main section
    const main = createElement("main", { class: "main" }, document.body);

    // search section
    const search = createElement("section", { class: "search" }, main);
    const searchTop = createElement("div", { class: "search__top" }, search);
    const searchLights = createElement("div", null, searchTop);
    createElement("img", { class: "search__light", src: "./assets/aqua.png", alt: "light" }, searchLights);
    createElement("img", { class: "search__light--blink", src: "./assets/cyan.png", alt: "blinking light" }, searchLights);
    createElement("h4", { class: "search__top--head" }, searchTop).innerText = "POKEMON SEARCH";
    const searchForm = createElement("form", { class: "search__form", action: "", method: "" }, search);
    const searchTextArea = createElement("textarea", { class: "search__form--box", type: "search", placeholder: "Enter Pokemon Name", style: "resize: none;" }, searchForm);
    const searchButton = createElement("button", { class: "search__form--button", type: "submit" }, searchForm);
    createElement("svg", { viewBox: "0 0 1024 1024" }, searchButton).innerText = "SEARCH!";
    createElement("path", { class: "path1", d: "M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z" }, searchButton)

    // photo section
    const photo = createElement("section", { class: "photo" }, main);
    const photoPlatform = createElement("div", { class: "photo__platform" }, photo);
    createElement("img", { src: "./assets/images.jpg", alt: "placeholder pokemon" }, photoPlatform);

    // stats section
    const stats = createElement("section", { class: "stats" }, main);
    const statsEq = createElement("div", { class: "stats__eq" }, stats);
    createElement("h4", { class: "stats__head" }, statsEq).innerText = "STATS";
    const statsInfo = createElement("article", { class: "stats__info" }, statsEq);
    createElement("p", { class: "stats__title" }, statsInfo).innerHTML = "Name: <span class='stats__data'></span>";
    createElement("p", { class: "stats__title" }, statsInfo).innerHTML = "HP: <span class='stats__data'></span>";
    createElement("p", { class: "stats__title" }, statsInfo).innerHTML = "Attack: <span class='stats__data'></span>";
    createElement("p", { class: "stats__title" }, statsInfo).innerHTML = "Speed: <span class='stats__data'></span>";

    // footer
    const footer = createElement("footer", { class: "footer" }, document.body);
    const footerColumns = createElement("article", { class: "footer__columns" }, footer);

    // footer column 1
    const footerColumn1 = createElement("div", { class: "footer__column" }, footerColumns);
    createElement("p", null, footerColumn1).innerText = "Gabrielle Malate";
    createElement("p", { class: "footer__column--info" }, footerColumn1).innerText = "Flexbox/Sass/BEM/HTML";
    createElement("p", { class: "footer__column--info" }, footerColumn1).innerText = "DOM: site setup. CSS animation";

    // footer column 2
    const footerColumn2 = createElement("div", { class: "footer__column" }, footerColumns);
    createElement("p", null, footerColumn2).innerText = "Tomas Martinez";

    // footer column 3
    const footerColumn3 = createElement("div", { class: "footer__column" }, footerColumns);
    createElement("p", null, footerColumn3).innerText = "Steven Faliszewski";
}

// Invoking the function to build the HTML structure
buildHTMLStructure();

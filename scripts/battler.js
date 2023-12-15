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
    const logoImg = createElement("img", { class: "nav__logo", src: "../assets/Pokedex_tool_icon-icons.com_67529.png" }, logoLink);

    // navigation items
    const navItems = createElement("ul", { class: "nav__items" }, navSmooth);
    const navItemLeft = createElement("li", { class: "nav__items--left" }, navItems);
    createElement("a", { href: "../home.html" }, navItemLeft).innerText = "POKEDEX";
    const navItemRight = createElement("li", { class: "nav__items--right" }, navItems);
    createElement("a", {}, navItemRight).innerText = "BATTLE!";

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

buildHTMLStructure();
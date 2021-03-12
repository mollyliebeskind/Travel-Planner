// generate navigation unordered list dynamically based on
// included sections
function generateNavigation() {
    const sections = document.querySelectorAll("section");
    const tempNav = document.createDocumentFragment();

    for (section of sections) {
        const sectionName = section.getAttribute("data-nav");
        const sectionID = section.getAttribute("id");
        const newElement = document.createElement("li");
        const linkElement = document.createElement("a")
        linkElement.textContent = sectionName;
        linkElement.classList.add("nav-item");
        linkElement.href = `#${sectionID}`;

        newElement.appendChild(linkElement);
        tempNav.appendChild(newElement);
    };

    navItem = document.getElementById("nav-list");

    navItem.appendChild(tempNav);

};

// wait until content has loaded to generate navigation
document.addEventListener('DOMContentLoaded', function () {
    generateNavigation();
});

// adjust navigation to be visibile on scroll
document.addEventListener('scroll', function() {
    const headerBar = document.getElementById("header-bar");
    const headerButton = document.getElementById("nav-explore-button");
    const hamburger = document.querySelector(".nav-mobile");
    const navSymbol = document.getElementById("brand-symbol-nav");

    headerBar.style.cssText = "background: #F4F6F6; box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);";
    navSymbol.style.color= "#22395c";
    hamburger.style.backgroundImage = "url(images/hamburger-menu-blue.png)";

    // Add a button that drives immediately to top on desktop only (too small on mobile)
    const mediaQuery = window.matchMedia('(min-width:  900px)')

    if (mediaQuery.matches == true) {
        headerButton.style.display = "flex"; 
        headerButton.style.cssText = "display: flex; left: 50%; right: auto; transform: translate(-50%, 0%)"
    }

    else {
        navSymbol.display = "none"
    }

    // remove visible navigation when at the top of the page
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        headerBar.style = "initial";
        navSymbol.style = "initial";
        headerButton.style = "initial";
        hamburger.style = "initial";
    
    };

});



function navDrop() {
    const navList = document.querySelector("#nav-list")

    if (navList.className == "nav-list-up") {
        navList.style.cssText = "display: block; position: absolute; zindex: 5000000000"

        // convert class to indicate the the navigation is now visibile
        navList.classList.remove("nav-list-up");
        navList.classList.add("nav-list-down");
    }

    else {
        navList.style.display = "none";

        // convert class to indicate the the navigation is now hidden
        navList.classList.remove("nav-list-down");
        navList.classList.add("nav-list-up");
    }
};
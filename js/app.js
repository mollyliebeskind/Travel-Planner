function generateNavigation() {
    const sections = document.querySelectorAll("section");
    const tempNav = document.createDocumentFragment();

    i = 1;

    for (section of sections) {
        if  (i != 1) {
            const sectionName = section.getAttribute("data-nav");
            const sectionID = section.getAttribute("id");
            const newElement = document.createElement("a");
            newElement.textContent = sectionName;
            newElement.className += 'nav-item';
            newElement.href = `#${sectionID}`;

            tempNav.appendChild(newElement);
        };
        i += 1;
    };

    navItem = document.getElementById("nav-container");

    navItem.appendChild(tempNav);

};

document.addEventListener('DOMContentLoaded', function () {
    generateNavigation();
});

document.addEventListener('scroll', function() {
    const headerBar = document.getElementById("navigation");
    const navLogin = document.getElementById("login");
    const navSymbol = document.getElementById("brand-symbol-nav");
    const headerButton = document.getElementById("nav-explore-button");
    const navItems = document.querySelectorAll(".nav-item");

    headerBar.style.cssText = "background: #F4F6F6; box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);";
    headerButton.style.display = "flex";

    const mediaQuery = window.matchMedia('(min-width:  900px)')
    
    if (mediaQuery.matches == true) {
        navLogin.style.backgroundImage = "url(../Travel-Planner/images/person-icon-blue.png)";
        navLogin.style.backgroundSize = "contain";  
        navSymbol.style.color= "#22395c";
        headerButton.style.cssText = "display: flex; left: 50%; right: auto; transform: translate(-50%, 0%)"
        
        for (navItem of navItems) {
            navItem.style.color= "#22395c";
        };
    }

    else {
        navLogin.display = "none"
        navSymbol.display = "none"

    }

    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        headerBar.style = "initial";
        navLogin.style = "initial";
        navSymbol.style = "initial";
        headerButton.style = "initial";

        for (navItem of navItems) {
            navItem.style = "initial";
        };
    
    };

});

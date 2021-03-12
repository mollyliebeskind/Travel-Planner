function generateNavigation() {
    const sections = document.querySelectorAll("section");
    const tempNav = document.createDocumentFragment();

    i = 1;

    for (section of sections) {
        // if  (i != 1) {
            const sectionName = section.getAttribute("data-nav");
            const sectionID = section.getAttribute("id");
            const newElement = document.createElement("li");
            const linkElement = document.createElement("a")
            linkElement.textContent = sectionName;
            linkElement.classList.add("nav-item");
            linkElement.href = `#${sectionID}`;
            linkElement.style.background = "#89C9D0";
            // newElement.style = "color: #22395c; font-weight: bolder"

            newElement.appendChild(linkElement);
            tempNav.appendChild(newElement);
        // };
        // i += 1;
    };

    navItem = document.getElementById("nav-list");

    navItem.appendChild(tempNav);

};

document.addEventListener('DOMContentLoaded', function () {
    generateNavigation();
});

document.addEventListener('scroll', function() {
    const headerBar = document.getElementById("header-bar");
    const headerButton = document.getElementById("nav-explore-button");
    const hamburger = document.querySelector(".nav-mobile");
    const navSymbol = document.getElementById("brand-symbol-nav");

    headerBar.style.cssText = "background: #F4F6F6; box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);";

    const mediaQuery = window.matchMedia('(min-width:  900px)')
    navSymbol.style.color= "#22395c";
    hamburger.style.backgroundImage = "url(images/hamburger-menu-blue.png)";
    
    if (mediaQuery.matches == true) {
        headerButton.style.display = "flex"; 
        headerButton.style.cssText = "display: flex; left: 50%; right: auto; transform: translate(-50%, 0%)"
    }

    else {
        navSymbol.display = "none"
    }

    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        headerBar.style = "initial";
        navSymbol.style = "initial";
        headerButton.style = "initial";
        hamburger.style = "initial";
    
    };

});

// function slideDown(target, duration) {
//     target.style.removeProperty('display');
//     const display = window.getComputedStyle(target).display;
    
//     if (display === 'none') {
//         display = 'block';
//     }
//     target.style.display = display;

//     // ensure that the starting state is hidden
//     const height = target.offsetHeight;    
//     target.style.height = 0;    
//     target.style.paddingTop = 0; 
//     target.style.paddingBottom = 0;  
//     target.style.marginTop = 0;  
//     target.style.marginBottom = 0;  
//     target.style.overflow = 'hidden'; 

//     // slide down
//     target.style.boxSizing = 'border-box'; 
//     target.style.transitionProperty = "height, margin, padding";  
//     target.style.transitionDuration = duration + 'ms'; 
//     target.style.height = height + 'px'; 
//     target.style.removeProperty('padding-top');   
//     target.style.removeProperty('padding-bottom');   
//     target.style.removeProperty('margin-top');   
//     target.style.removeProperty('margin-bottom');  

//     // remove uneeded properties off screen
//     window.setTimeout(function(){
//         target.style.removeProperty('height'); 
//         target.style.removeProperty('overflow'); 
//         target.style.removeProperty('transition-duration'); 
//         target.style.removeProperty('transition-property'); 
//       }, duration);

//     }

// function slideUp(target, duration) {
//     // set the transition properties
//     target.style.transitionProperty = 'height, margin, padding'; 
//     target.style.transitionDuration = duration + 'ms'; 
//     target.style.boxSizing = 'border-box'; 
//     target.style.height = target.offsetHeight + 'px';

//     // hide the target
//     target.style.height = 0; 
//     target.style.paddingTop = 0; 
//     target.style.paddingBottom = 0; 
//     target.style.marginTop = 0; 
//     target.style.marginBottom = 0; 
//     target.style.overflow = 'hidden';

//     // after action completes, remove the rest of the properties off screen
//     window.setTimeout(function() {
//         target.style.display = 'none'; 
//         target.style.removeProperty('height');
//         target.style.removeProperty('padding-top');  
//         target.style.removeProperty('padding-bottom');  
//         target.style.removeProperty('margin-top');  
//         target.style.removeProperty('margin-bottom');  
//         target.style.removeProperty('overflow');         
//         target.style.removeProperty('transition-duration');  
//         target.style.removeProperty('transition-property');  
//       }, 
//       duration);
//     };

// function slideToggle(target, duration) {
//     let slideToggle = (target, duration = 500) => {
//         if (window.getComputedStyle(target).display === 'none') {
//           return slideDown(target, duration);
//         } else {
//           return slideUp(target, duration);
//         }
//       }
// } ;


function navDrop() {
    // const button = document.getElementById("nav-toggle");
    const navList = document.querySelector("#nav-list")

    if (navList.className == "nav-list-up") {
        navList.style.display = "block";
        navList.style.position = "absolute";
        navList.style.zindex = "5000000000";
        navList.classList.remove("nav-list-up");
        navList.classList.add("nav-list-down");
    }

    else {
        navList.style.display = "none";
        navList.classList.remove("nav-list-down");
        navList.classList.add("nav-list-up");
    }
};
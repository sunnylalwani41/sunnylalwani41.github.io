let typingEffect=new Typed(".multiText", {
    strings : ["Long-Life Learner","Long-Life Learner", "passionate Full-Stack Web Developer at Masai School", "an expert in Java-Backend Developer and I attend the Masai School.","Coder", "Problem Solver"],
    loop: true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
})

GitHubCalendar(".calendar", "sunnylalwani41");

// or enable responsive functionality:
GitHubCalendar(".calendar", "sunnylalwani41", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "sunnylalwani41", {
   proxy (username) {
     return fetch(`https://your-proxy.com/github?user=${username}`)
   }
}).then(r => r.text())

burger=document.querySelector(".burger");
navbar=document.querySelector(".navbar");
navList=document.querySelector(".nav-list");
rightNav=document.querySelector(".rightNav");
burgerContainer=document.querySelector(".burger-container");
crossSymbol=document.querySelector(".cross");

burger.addEventListener("click", ()=>{
    navbar.classList.toggle("h-nav");
    navList.classList.toggle("v-nav");
    rightNav.classList.toggle("v-nav");
    burgerContainer.classList.toggle("displayNone");
    crossSymbol.classList.toggle("displayNone");
})

// when click on the menu item then close the menu
const navItems = document.querySelectorAll(".nav-list li a"); // ✅ select all menu links

// ✅ Add event listener to each menu item
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navbar.classList.toggle("h-nav");
        navList.classList.toggle("v-nav");
        rightNav.classList.toggle("v-nav");
        burgerContainer.classList.toggle("displayNone");
        crossSymbol.classList.toggle("displayNone");
    });
});

// download and open the resume pdf
function openAndDownload() {
  // 1️⃣ Open Google Drive file in new tab
  window.open('https://drive.google.com/file/d/1jL1A3NrkywKRL7eA8ds4My_VmClxLMlG/view?usp=sharing', '_blank');

  // 2️⃣ Trigger download of local PDF file
  const link = document.createElement('a');
  link.href = '../download/Sunny_Lalwani_fp04_424-Resume.pdf';
  link.download = 'Sunny_Lalwani_fp04_424-Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}



/* 
  1) selector for your fixed header / nav. Update if your header uses a different class.
  2) Also call this after toggling the mobile menu (see note below).
*/
(function () {
  const headerSelector = '.nav-bar, .navbar, nav, .navbar-background'; // try common names; pick the one you use
  const header = document.querySelector(headerSelector) || document.querySelector('nav') || document.querySelector('.navbar');

  function setNavOffset() {
    const navHeight = header ? header.getBoundingClientRect().height : 0;
    // set CSS variable used in CSS fallback
    document.documentElement.style.setProperty('--nav-h', `${navHeight}px`);

    // adjust all anchor spacers (in case you have multiple)
    document.querySelectorAll('.anchor').forEach(a => {
      a.style.height = `${navHeight}px`;
      a.style.marginTop = `-${navHeight}px`;
    });
  }

  // run on load
  window.addEventListener('load', setNavOffset);
  // update on resize/ orientation change
  window.addEventListener('resize', setNavOffset);

  // If your menu opens/closes and changes header height, call setNavOffset() after toggle.
  // Example: if your burger toggles a class on header, listen for that click:
  const burger = document.querySelector('.burger');
  if (burger) {
    burger.addEventListener('click', () => {
      // small timeout to allow CSS animation to finish (if any)
      setTimeout(setNavOffset, 300);
    });
  }

  // If header height could change for other reasons, you can periodically refresh (optional)
  // setInterval(setNavOffset, 2000); // uncomment only if necessary
})();
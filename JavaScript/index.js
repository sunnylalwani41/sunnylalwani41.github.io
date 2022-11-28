let typingEffect=new Typed(".multiText", {
    strings : ["Long-Life Learner","Long-Life Learner", "aspiring Java-Backend Developer at Masai School", "Coder", "Problem Solver"],
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
burger.addEventListener("click", ()=>{
    // navbar.classList.toggle("h-nav");
    navList.classList.toggle("v-nav");
    rightNav.classList.toggle("v-nav");
    
})
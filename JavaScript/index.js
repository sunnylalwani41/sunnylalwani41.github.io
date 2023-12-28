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
fetch('https://api.github.com/users/<username>/contributions', {
    headers: {
        'Authorization': 'token <your_GitHub_token>'
    }
})
.then(response => response.json()).then(r => r.text())

burger=document.querySelector(".burger");
navbar=document.querySelector(".navbar");
navList=document.querySelector(".nav-list");
rightNav=document.querySelector(".rightNav");
burger.addEventListener("click", ()=>{
    navbar.classList.toggle("h-nav");
    navList.classList.toggle("v-nav");
    rightNav.classList.toggle("v-nav");
    
})


.then(data => {
    // Process the contribution data
});

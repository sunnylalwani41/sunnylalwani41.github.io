// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const hamburgerIcon = hamburger.querySelector("i");

let closeNavbar = () =>{
  navLinks.classList.remove("open");
  hamburgerIcon.classList.remove("fa-xmark");

  if(!hamburgerIcon.classList.contains("fa-bars")){
    hamburgerIcon.classList.add("fa-bars");
  }
}

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle("fa-bars");
  hamburgerIcon.classList.toggle("fa-xmark");
});

// Theme toggle
const themeBtns = document.querySelectorAll('.theme-btn');


// github
function updateGitHubCards(theme) {
  const cards = document.querySelectorAll('#github img');
  const colorTheme = theme === 'dark' ? 'github_dark' : 'default';
  const graphTheme = theme === 'dark' ? 'github-dark' : 'github-compact';

  cards[0].src = `https://github-readme-stats.vercel.app/api?username=sunnylalwani41&show_icons=true&theme=${colorTheme}`;
  cards[1].src = `https://github-readme-stats.vercel.app/api/top-langs/?username=sunnylalwani41&layout=compact&theme=${colorTheme}`;
  cards[2].src = `https://github-readme-streak-stats.herokuapp.com/?user=sunnylalwani41&theme=${colorTheme}`;
  // cards[3].src = `https://github-readme-activity-graph.vercel.app/graph?username=sunnylalwani41&theme=${graphTheme}`;
}

let changeIconForTheme = () => {
  for(let i = 0; i < themeBtns.length; i++){
    let themeBtn = themeBtns[i];
    const themeIcon = themeBtn.querySelector('i');

    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
  }
}

for(let i = 0; i < themeBtns.length; i++){
  let themeBtn = themeBtns[i];

  themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    changeIconForTheme();

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateGitHubCards(isDark ? 'dark' : 'light');
  });
}

// Scroll highlight + smooth offset fix
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 130;
    if (scrollY >= sectionTop) current = sec.id;
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) link.classList.add('active');
  });
});

// Smooth scroll offset fix
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offsetTop = target.offsetTop - 70;
    scrollTo({ top: offsetTop, behavior: 'smooth' });
  });
});

// Fade-in animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Typing animation for home section
const roles = [
  "Java Backend Developer",
  "Full Stack Enthusiast",
  "API Integrator"
];
let typedIndex = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");

function type() {
  if (charIndex < roles[typedIndex].length) {
    typedText.textContent += roles[typedIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = roles[typedIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    typedIndex = (typedIndex + 1) % roles.length;
    setTimeout(type, 400);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (roles.length) setTimeout(type, 500);
});

GitHubCalendar(".calendar", "sunnylalwani41");

// or enable responsive functionality:
GitHubCalendar(".calendar", "sunnylalwani41", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "sunnylalwani41", {
   proxy (username) {
     return fetch(`https://your-proxy.com/github?user=${username}`)
   }
})

// download and open the resume pdf
function openAndDownload() {
  // 1️⃣ Open Google Drive file in new tab
  window.open('https://drive.google.com/file/d/1jL1A3NrkywKRL7eA8ds4My_VmClxLMlG/view?usp=sharing', '_blank');

  // 2️⃣ Trigger download of local PDF file
  const link = document.createElement('a');
  link.href = './download/Sunny_Lalwani_fp04_424-Resume.pdf';
  link.download = 'Sunny_Lalwani-Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// contact form submission
const form = document.getElementById("contact-form");
const statusText = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusText.textContent = "Sending message...";
  statusText.className = "form-status";

  try {
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      statusText.textContent = "✅ Message sent successfully!";
      statusText.classList.add("success");
      form.reset();
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    statusText.textContent = "❌ Failed to send message. Please try again.";
    statusText.classList.add("error");
    form.reset();
  }

  // Fade out message after 4 seconds
  setTimeout(() => {
    statusText.textContent = "";
    statusText.className = "form-status";
  }, 4000);
});

// when click on the menu item then close the menu
const navList = document.querySelectorAll("#nav-links li"); // ✅ select all menu links

navList.forEach(item => {
    item.addEventListener("click", () => {
        closeNavbar();
    });
});
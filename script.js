// Typed animation
new Typed(".text", {
    strings: ["Cyber Law Specialist", "Criminal Law Advocate", "Legal Data Analyst"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});

// Mobile menu
const menu = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("active");
};

// Scroll reveal animation
const elements = document.querySelectorAll("section, .project-card, .skill");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if(position < screen - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

elements.forEach(el=>{
    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="1s ease";
});

const skills = [
    "Full Stack Developer",
    "HTML Specialist",
    "CSS Designer",
    "JavaScript Coder",
    "Web Builder"
];

let skillIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {

    const currentSkill = skills[skillIndex];

    if (!deleting) {

        typingElement.textContent =
            currentSkill.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentSkill.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentSkill.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            skillIndex = (skillIndex + 1) % skills.length;
        }
    }

    setTimeout(typeEffect, deleting ? 80 : 120);
}

typeEffect();
// Terminal simulation
const lines = [
  "> Initializing scan...",
  "> Running nmap...",
  "> Enumerating ports...",
  "> Vulnerability detected...",
  "> Exploit successful"
];

let i = 0;
const terminal = document.getElementById("terminal");

function typeLine() {
  if (i < lines.length) {
    terminal.innerHTML += lines[i] + "<br>";
    i++;
    setTimeout(typeLine, 800);
  }
}

typeLine();

// Smooth scroll
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* =============================
   WRITEUP TYPEWRITER EFFECT
============================= */

function typeWriterEffect(element, speed = 10) {
  const text = element.innerHTML;
  element.innerHTML = "";
  element.classList.add("typing");

  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      element.classList.remove("typing");
    }
  }

  typing();
}

/* TRIGGER WHEN SCROLL INTO VIEW */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      typeWriterEffect(entry.target, 5);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

/* TARGET YOUR WRITEUP TEXT */
document.querySelectorAll("#writeup p, #blog .para").forEach(el => {
  observer.observe(el);
});
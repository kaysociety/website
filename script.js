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
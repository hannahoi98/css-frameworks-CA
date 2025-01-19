// Function for setting dark og light theme

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}

const themeToggle = document.querySelector("#toggle-theme");
themeToggle.addEventListener("click", toggleTheme);

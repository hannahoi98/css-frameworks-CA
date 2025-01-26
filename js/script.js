// Function for setting dark og light theme
function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}

const themeToggle = document.querySelector("#toggle-theme");
themeToggle.addEventListener("click", toggleTheme);

// Function for mobile navigation
const menuToggle = document.getElementById("toggle-menu");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Login form Validation
const loginLink = document.getElementById("login-link");
const loginForm = document.getElementById("login-form");

loginLink.addEventListener("click", (event) => {
  if (!loginForm.checkValidity()) {
    loginForm.reportValidity();
    event.preventDefault();
  }
});

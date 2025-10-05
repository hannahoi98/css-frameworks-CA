// Function for setting dark og light theme
function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  updateButtonText();
}

// Setting theme based on users preference
function setInitialTheme() {
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  if (prefersDarkScheme) {
    document.documentElement.classList.add("dark");
  }
  updateButtonText();
}

//Changing button theme based on the current theme
function updateButtonText() {
  const button = document.querySelector("#toggle-theme");
  if (document.documentElement.classList.contains("dark")) {
    button.textContent = "Light Mode";
  } else {
    button.textContent = "Dark Mode";
  }
}

// Setting the initial theme when page loads
setInitialTheme();

//Changing Theme when clicking button
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

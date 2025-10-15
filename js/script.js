/**
 * Toggle between light and dark themes.
 * Persists the user’s choice in localStorage under the key "theme".
 */
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch (e) {
    void e;
  }
  updateButtonText();
}

/**
 * Apply the initial theme on page load.
 * Order of precedence:
 *  1) Previously stored user preference in localStorage ("dark" | "light").
 *  2) System preference via prefers-color-scheme media query.
 */
function setInitialTheme() {
  let stored = null;
  try {
    stored = localStorage.getItem("theme");
  } catch (e) {
    void e;
  }

  if (stored === "dark") {
    document.documentElement.classList.add("dark");
  } else if (stored === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    document.documentElement.classList.toggle("dark", prefersDarkScheme);
  }
  updateButtonText();
}

/** Update the theme toggle button’s text to match the current theme. */
function updateButtonText() {
  const button = document.querySelector("#toggle-theme");
  if (document.documentElement.classList.contains("dark")) {
    button.textContent = "Light Mode";
  } else {
    button.textContent = "Dark Mode";
  }
}

/** Initialize theme when the page loads. */
setInitialTheme();

/**
 * Register click handler to toggle theme.
 * Expects an element with id="toggle-theme".
 * @type {HTMLButtonElement|null}
 */
const themeToggle = document.querySelector("#toggle-theme");
themeToggle.addEventListener("click", toggleTheme);

/**
 * Mobile navigation toggle.
 * Expects elements with ids "toggle-menu" and "mobile-menu".
 * Toggles the `hidden` class on the mobile menu.
 * @type {HTMLElement|null}
 */
const menuToggle = document.getElementById("toggle-menu");
/** @type {HTMLElement|null} */
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

/**
 * Login form validation.
 * Prevents navigation if the form is invalid and triggers native validity UI.
 *
 * @type {HTMLAnchorElement|null} loginLink
 * @type {HTMLFormElement|null}  loginForm
 */
const loginLink = document.getElementById("login-link");
const loginForm = document.getElementById("login-form");

loginLink.addEventListener("click", (event) => {
  if (!loginForm.checkValidity()) {
    loginForm.reportValidity();
    event.preventDefault();
  }
});

// After DOM content loads...
document.addEventListener("DOMContentLoaded", () => {
  // Toggle Hamburger Menu Display
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector("nav");
  hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Switch favicon to light or dark
  const favicon = document.getElementById("favicon");
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  function updateFavicon(e) {
    favicon.href = e.matches ? "initials.svg" : "initials-light.svg";
  }
  updateFavicon(mediaQuery);
  mediaQuery.addEventListener("change", updateFavicon);
});

// Get all tab links and content
const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

// Function to show a specific tab
function showTab(tabId) {
  // Hide all tab contents
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  // Show the selected tab content
  document.getElementById(tabId).classList.add("active");
}

// Add event listeners to tab links
tabLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const tabId = link.getAttribute("data-tab");
    showTab(tabId);
    document.querySelector("nav").classList.toggle("show");
  });
});

// Show the home tab by default on load
showTab("home");

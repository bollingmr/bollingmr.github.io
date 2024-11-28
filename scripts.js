// scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector("nav");

  hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
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
  });
});

// Show the home tab by default on load
showTab("home");

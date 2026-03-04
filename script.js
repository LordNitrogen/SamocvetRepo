document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  const heroButton = document.getElementById("hero-button");
  if (heroButton) {
    heroButton.addEventListener("click", () => {
      alert("Your new website is ready to customize!");
    });
  }
});


const form = document.getElementById("signup-form");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const errorMessage = document.getElementById("error-message");
const emailInput = document.getElementById("email-input");

form?.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email-input").value;

  if (!email) {
    errorMessage.innerHTML = "Email is required!"
  }

  if (regex.test(email)) {
    document.getElementById("email-input").value = "";

    sessionStorage.setItem("email", email);
    window.location.href = "success.html";
  } else {
    errorMessage.style.display = "inline";
    emailInput.style.borderColor = "hsl(356, 99%, 68%)";
    emailInput.style.color = "hsl(356, 99%, 68%)";
  }
});

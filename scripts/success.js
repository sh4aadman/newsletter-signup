const email = sessionStorage.getItem("email");

document.getElementById("email-address").innerHTML = email;

document
  .getElementById("dismiss-button")
  .addEventListener("click", function (_) {
    window.location.href = "index.html";
  });

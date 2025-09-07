// ==== JavaScript for Web Application ====

// Select elements
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Handle form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate inputs
  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "⚠️ Please fill in all fields.";
    formMessage.style.color = "red";
  } else if (!validateEmail(email)) {
    formMessage.textContent = "⚠️ Invalid email format.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "✅ Thank you, " + name + "! Your message has been sent.";
    formMessage.style.color = "green";
    form.reset();
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
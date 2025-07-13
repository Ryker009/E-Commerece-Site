// auth.js

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Simple check for demo purposes
  if (email === "user@example.com" && password === "123456") {
    localStorage.setItem("user", JSON.stringify({ email }));
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials. Try: user@example.com / 123456");
  }
}

// Optional: Auto-redirect if already logged in
window.onload = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    window.location.href = "index.html";
  }
};
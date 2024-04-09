const sign_in_link = document.querySelector("#sign-in-link");
const sign_up_link = document.querySelector("#sign-up-link");
const container = document.querySelector(".container");

// Function to check if local storage has user data
function checkUserCredentials(username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.some(
    (user) => user.username === username && user.password === password
  );
}

// Function to save user data to local storage
function saveUserData(username, email, password) {
  const newUser = { username, email, password };
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
}

// Function to check if the username already exists
function checkUsernameExists(username) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.some((user) => user.username === username);
}

// Function to check if the email address is already registered
function checkEmailExists(email) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.some((user) => user.email === email);
}

sign_up_link.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_link.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Handle sign up form submission
const signUpForm = document.querySelector(".sign-up-form");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = signUpForm.querySelector('input[type="text"]').value.trim();
  const email = signUpForm.querySelector('input[type="email"]').value.trim();
  const password = signUpForm
    .querySelector('input[type="password"]')
    .value.trim();

  // Check if the username already exists
  if (checkUsernameExists(username)) {
    alert("Username already taken. Please choose a different username.");
    return; // Stop the registration process
  }

  // Check if the email address is already registered
  if (checkEmailExists(email)) {
    alert("Email already registered. Please sign in.");
    return; // Stop the registration process
  }

  // Save user data to local storage
  saveUserData(username, email, password);
  alert("Registration successful. Login using your credentials.");
  // Display registration successful message
  const successMessage = document.createElement("p");
  successMessage.textContent =
    "Registration successful. Login using your credentials.";
  signUpForm.appendChild(successMessage);
  window.location.href = "login.html";
});

// Handle sign in form submission
const signInForm = document.querySelector(".sign-in-form");
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = signInForm.querySelector('input[type="text"]').value.trim();
  const password = signInForm
    .querySelector('input[type="password"]')
    .value.trim();

  // Check if user credentials are valid
  const isValidUser = checkUserCredentials(username, password);
  if (isValidUser) {
    if (username === "admin" && password === "admin@5791") {
      window.location.href = "admin-dashboard.html";
    } else {
      window.location.href = "index.html"; // Redirect to index.html for non-admin users
    }
  } else {
    alert("Access denied. Invalid user credentials.");
  }
});

// Clear form inputs when the page is refreshed
window.addEventListener("beforeunload", function (event) {
  const form = document.querySelector(".sign-up-form");
  form.reset();
});

document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");

  // Function to check if the user is logged in
  function isLoggedIn() {
    // Check if the user is logged in using your authentication method
    // For demonstration purposes, I'll use a simple flag
    return sessionStorage.getItem("loggedIn") === "true";
  }

  // Function to update the login/logout button text
  function updateLoginButton() {
    if (isLoggedIn()) {
      loginBtn.textContent = "Logout";
      loginBtn.href = "#"; // Update the href attribute to logout URL
    } else {
      loginBtn.textContent = "Login";
      loginBtn.href = "login.html"; // Update the href attribute to login URL
    }
  }

  // Check and update the login/logout button text when the page loads
  updateLoginButton();
});

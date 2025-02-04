
const passwordInput = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("show-password");
const loginButton = document.getElementById("login-button");


function togglePassword() {
    var passwordField = document.getElementById('password');
    var checkbox = document.getElementById('show-password');
    
    if (checkbox.checked) {
        passwordField.type = 'text'; 
    } else {
        passwordField.type = 'password'; 
    }
}

loginButton.addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = passwordInput.value;
    
    if (email && password) {
        alert("Logged in successfully!");
    } else {
        alert("Please fill in both fields.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Script is working!");

    const cookieBanner = document.getElementById("cookieBanner");
    const acceptButton = document.getElementById("acceptCookies");

    if (cookieBanner && acceptButton) {
        acceptButton.addEventListener("click", function () {
            console.log("Accept button clicked!");
            cookieBanner.style.display = "none";
        });
    } else {
        console.error("Cookie banner or button not found!");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.getElementById("burgerIcon");
    const menu = document.getElementById("menu");

  
    burgerIcon.addEventListener("click", function () {
        menu.classList.toggle("active"); 
    });
});


// Redirect to main page after signing in
document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Sign In Successful!");
    window.location.href = "../index1.html";
});

// Stay Signed Out Button
document.getElementById("staySignedOut").addEventListener("click", function() {
    alert("You chose to stay signed out!");
    window.location.href = "../index1.html";
});

// Scroll to Sign-In Box
function scrollToSignIn() {
    document.getElementById("signin-box").scrollIntoView({ behavior: "smooth" });
}

// Scroll to Sign-In Box
function scrollToSignIn() {
    document.getElementById("signin-box").scrollIntoView({ behavior: "smooth" });
}

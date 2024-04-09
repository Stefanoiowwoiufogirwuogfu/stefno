document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Simulating a login check (replace this with actual authentication logic)
  if (username === "user1" && password === "password1") {
      // Display an alert upon successful login
      alert("Login successful! Welcome, " + username + "!");
      // Redirect to contentEditor.html upon successful login
      window.location.href = "contentEditor.html";
  } else {
      alert("Invalid username or password");
  }
});
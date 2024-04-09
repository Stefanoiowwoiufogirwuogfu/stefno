document.addEventListener("DOMContentLoaded", function() {
  const newsletterForm = document.getElementById("newsletterForm");

  newsletterForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission behavior

      const emailInput = document.getElementById("email");
      const email = emailInput.value.trim(); // Trim the input value to remove whitespace

      if (email) {
          // Get existing emails from local storage or initialize an empty array
          let emails = JSON.parse(localStorage.getItem("newsletterEmails")) || [];

          // Check if the email is already subscribed
          if (!emails.includes(email)) {
              // Add the new email to the array
              emails.push(email);

              // Save the updated array back to local storage
              localStorage.setItem("newsletterEmails", JSON.stringify(emails));

              // Optionally, display a success message or perform other actions
              alert("Thank you for subscribing to our newsletter!");
          } else {
              // Email is already subscribed
              alert("You are already subscribed to our newsletter.");
          }

          // Clear the email input field after submission
          emailInput.value = "";
      } else {
          // Email input is empty
          alert("Please enter a valid email address.");
      }
  });
});

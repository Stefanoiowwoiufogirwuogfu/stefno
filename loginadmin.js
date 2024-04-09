document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Fetch input values
    const adminName = document.getElementById('adminname').value;
    const password = document.getElementById('password').value;

    // Simple login validation
    if (adminName === 'admin' && password === 'password') {
      // Display success message
      alert('Login successful! Welcome, ' + adminName + '!');
      // Redirect to dashboard page
      window.location.href = 'subscribtion.html';
    } else {
      // Display error message
      alert('Invalid credentials. Please try again.');
      // Clear input fields
      document.getElementById('adminname').value = '';
      document.getElementById('password').value = '';
    }
  });
});

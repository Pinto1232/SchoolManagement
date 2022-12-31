// Login form validation
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the input fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check that the fields are not empty
    if (username === '' || password === '') {
      alert('Username and password are required');
      return;
    }
  
    // If the fields are not empty, proceed with the login process
    // (e.g. send an AJAX request to the server to authenticate the user)
  });
  
  // Registration form validation
  document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the input fields
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Check that the fields are not empty
    if (username === '' || email === '' || password === '') {
      alert('Username, email, and password are required');
      return;
    }
  
    // Check that the email is in a valid format
    if (!validateEmail(email)) {
      alert('Invalid email');
      return;
    }
  
    // If the fields are not empty and the email is valid, proceed with the registration process
    // (e.g. send an AJAX request to the server to register the user)
  });
  
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
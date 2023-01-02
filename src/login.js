const  mysqli =  './dbConnection';
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegisterFormButton = document.getElementById('show-register-form');
const showLoginFormButton = document.getElementById('show-login-form');



showRegisterFormButton.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
});

showLoginFormButton.addEventListener('click', () => {
  loginForm.classList.remove('hidden');
  registerForm.classList.add('hidden');
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Add code to validate login credentials here
  // If login credentials are valid, redirect to dashboard page

  // Check if form is valid
  if (loginForm.checkValidity()) {
    // Form is valid, get email and password
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate login credentials
    if (validateCredentials(email, password)) {
      // Login credentials are valid, redirect to dashboard page
      location.replace('/src/dashboard.html');
    } else {
      // Login credentials are invalid, show error message
      const errorMessage = document.getElementById('error-message');
      errorMessage.innerHTML = 'Invalid email or password';
      errorMessage.style.display = 'block';
    }
  } else {
    // Form is invalid, show error messages
    loginForm.reportValidity();
  }
});


const emailInput = document.getElementById('email');

emailInput.addEventListener('blur', () => {
  // Check if email is valid
  if (emailInput.checkValidity()) {
    // Email is valid, remove error message
    emailInput.classList.remove('error');
  } else {
    // Email is invalid, show error message
    emailInput.classList.add('error');
    emailInput.reportValidity();
  }
});


function validateCredentials(email, password) {
  // Connect to database
  $conn = new mysqli('localhost', 'user', 'password', 'database');
  console.log($conn);

  // Check if email exists in database
  $query = "SELECT * FROM users WHERE email = '$email'";
  $result = mysqli_query($conn, $query);
  $user = mysqli_fetch_assoc($result);

  // If email exists, check if password is correct
  if ($user) {
    if (password_verify($password, $user['password'])) {
      // Login credentials are valid
      return true;
    } else {
      // Password is incorrect
      return false;
    }
  } else {
    // Email does not exist
    return false;
  }
}

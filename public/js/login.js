const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const name = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (name && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/employee/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};



document
  .querySelector('#myForm')
  .addEventListener('submit', loginFormHandler);


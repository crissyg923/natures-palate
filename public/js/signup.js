const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const name = document.querySelector('#newemp').value.trim();
    const position = document.querySelector('#newpos').value.trim();
    const address = document.querySelector('#newadd').value.trim();
    const password = document.querySelector('#newpass').value.trim();
  
    //console.log('empEl:', password);
    //console.log('posEl:', posEl);
    //console.log('addEl:', addEl);
    //console.log('empPasswordEl:', empPasswordEl);

    if (name && position && address && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/employee', {
        method: 'POST',
        body: JSON.stringify({ 
          name,
          position,
          address,
          password
         }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        console.log('Error response:', response); 
        alert('Error: ' + response.statusText);
      }
    }
  };
  
  
  document
    .querySelector('#signupForm')
    .addEventListener('submit', signupFormHandler);
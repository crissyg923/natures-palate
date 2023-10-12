const getUsers = async () => {
    try {
      const response = await fetch('/html'); // Assuming the route in usersRouter.js is '/api/users'
      if (response.ok) {
        const users = await response.json();
        console.log(users); // Do something with the fetched user data
      } else {
        console.log('Error:', response.statusText);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  //employeeadmin

  document
  .querySelector('#employeeadmin')
  .addEventListener('click', getUsers);
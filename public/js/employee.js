//function for displaying employees 

const getUsers = async () => {
    try {
      const response = await fetch('/html'); 
      if (response.ok) {
        const users = await response.json();
        console.log(users); 
      } else {
        console.log('Error:', response.statusText);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  document
  .querySelector('#employeeadmin')
  .addEventListener('click', getUsers);
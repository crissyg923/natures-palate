// Logic handling for creating menu item
const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#dish-name').value.trim();
  const description = document.querySelector('#dish-desc').value.trim();
  const allergies = document.querySelector('#dish-aller').value.trim();
  const price = document.querySelector('#dish-price').value.trim();

  if (name && description && allergies && price) {
    const response = await fetch(`/api/dishes`, {
      method: 'POST',
      body: JSON.stringify({ name, description, allergies, price }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/menu');
    } else {
      alert('Failed to create dish');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/dishes/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/menu');
    } else {
      alert('Failed to delete dish');
    }
  }
};

document
  .querySelector('.new-dish-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.dish-list')
  .addEventListener('click', delButtonHandler);

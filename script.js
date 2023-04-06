const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // You can replace the following code with your own login logic
  if (username === 'A9qx' && password === 'andr@asistheG@0t') {
    alert('You are now logged in.');
  } else {
    alert('Invalid username or password.');
  }
});

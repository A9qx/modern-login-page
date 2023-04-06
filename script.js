const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Replace the following code with your own login authentication logic
  if (username === 'A9qx' && password === 'andr@asistheG@0t') {
    window.location.href = 'https://www.youtube.com/watch?v=BpcNQ7nC4yg';
  } else {
    alert('Incorrect username or password');
  }
});

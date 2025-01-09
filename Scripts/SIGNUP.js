document.getElementById('signupForm').addEventListener('submit', function (event) { event.preventDefault(); // Prevent form submission 
var username = document.getElementById('username').value;
var email = document.getElementById('email').value; 
var password = document.getElementById('password').value;


// Simulate storing the user data (in a real app, you'd send this data to the server) 
console.log('User signed up:', { username, email, password });


// Redirect to login page 
window.location.href = 'login.html'; 

});
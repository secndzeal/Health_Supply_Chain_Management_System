// script.js
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('button[type="submit"]');

document.getElementById('loginButton').addEventListener('click', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === 'admin' && password === 'admin123') {  
        window.location.href = '../Pages/Dashboard.html';
    } else {
        alert('Invalid username or password');
    }
    // Here you can add further logic, like sending data to a server

});
});

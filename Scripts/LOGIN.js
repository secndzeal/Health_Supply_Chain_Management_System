document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('button[type="submit"]');

    document.getElementById('loginButton').addEventListener('click', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember-me').checked;

         

// Simple validation
        if (username === 'admin' && password === 'admin123' && rememberMe) {
             
            window.location.href = '../Pages/Dashboard.html';

        } else if(username === 'admin' && password === 'admin123') {
            alert('Please check the box');
        }
        else {
            alert('Invalid username or password');
        }
        // Here you can add further logic, like sending data to a server


    });
});

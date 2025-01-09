// script.js
document.getElementById('loginButton').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === 'admin' && password === 'admin123') {  
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
    // Here you can add further logic, like sending data to a server

});

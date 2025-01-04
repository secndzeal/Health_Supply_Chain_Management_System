// script.js
document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        alert('Logging in as ' + username);
        // Here you can add further logic, like sending data to a server
    }
});
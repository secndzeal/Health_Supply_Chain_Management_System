document.getElementById('signupForm')
.addEventListener('submit', function (event)
{ event.preventDefault(); // Prevent form submission 
var fullname = document.getElementById('fullname').value;
var email = document.getElementById('email').value; 
var password = document.getElementById('password').value;
var confirm_password = document.getElementById('confirm-password').value;


if (fullname === '' && email ==='' && password === '' && confirm_password ==='') {  
    alert("There's an empty field left!");
} else {
    
    window.location.href = '../Pages/LOGIN.html'; 
}
// Simulate storing the user data  
console.log('User signed up:', { username, email, password });


 

});
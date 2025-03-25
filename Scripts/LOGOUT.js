document.addEventListener("DOMContentLoaded", function () {
    // Get the logout button element
    const logoutButton = document.getElementById('logoutt');

    // Check if the button exists before adding event listener
    if (logoutButton) {
        logoutButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default behavior (e.g., navigation)
            logout(); // Call the logout function
        });
    }

    // Logout function
    function logout() {
        // Remove authentication token from localStorage
        localStorage.removeItem("authToken"); 
        
        // Clear all sessionStorage data
        sessionStorage.clear();  

        // Redirect to the login page
        window.location.href = "../Pages/LOGIN.html"; 
    }
});
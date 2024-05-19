document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Redirecting to Booking Page...");
    // Redirect to the booking page after login
    window.location.href = "./booking.html";
});

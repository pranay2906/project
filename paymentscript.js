document.getElementById("paymentForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent the form from submitting normally
    alert("Payment submitted successfully!");
    // Here you would typically send the payment details to your server or payment gateway
});

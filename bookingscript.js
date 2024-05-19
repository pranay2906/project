function validateForm() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var checkIn = document.getElementById('checkIn').value;
    var checkOut = document.getElementById('checkOut').value;
    var accompanying = document.getElementById('accompanying').value;
    var roomClass = document.getElementById('roomClass').value;
    var book=document.getElementById("book111");
    
    book.onclick=()=>{
        window.location.href='./login.html';
        console.log("Hello World");
    }

    // Basic validation, you can add more complex validation as per requirement
    if (name == "" || phone == "" || email == "" || dob == "" || checkIn == "" || checkOut == "" || accompanying == "" || roomClass == "") {
        alert("All fields must be filled out");
        return false;
    }
   
    // Additional validation for phone number, email, dates, etc. can be added here

    return true;
}
alert("Page is being redirected to payment page...");
window.location.href = "file:///E:/temp/payment.html"
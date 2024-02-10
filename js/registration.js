$(document).ready(function(){
    $("#registrationForm").submit(function(event){
        event.preventDefault();
        if(validateForm()) {
            var title = $("#title").val();
            var customerId = generateCustomerId();
            var customerName = $("#customerName").val();
            var customerEmail = $("#email").val();
            var customerMobile = $("#countryCode").val() + $("#mobile").val();            

            localStorage.setItem('title',title)
            localStorage.setItem('customerId', customerId); 
            localStorage.setItem('customerName', customerName);
            localStorage.setItem('customerEmail', customerEmail);
            localStorage.setItem('customerMobile', customerMobile);

            window.location.href = 'registration_success.html';
        }
    });

    $("#loginBtn").click(function() {
        window.location.href = "login.html";
    });

    function validateForm() {
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();
        var mobileNumber = $("#mobile").val();
        
        if(password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        localStorage.setItem('password', password);
        return true;
    }

    function generateCustomerId() {
        return Math.floor(1000000000000 + Math.random() * 9000000000000);
    }
});

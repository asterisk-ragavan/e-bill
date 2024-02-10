$(document).ready(function(){
    $("#loginForm").submit(function(event){
        event.preventDefault();
        var customerId = $("#customerId").val();
        var password = $("#password").val();

        var customerIds = localStorage.getItem('customerId');
        var passwords = localStorage.getItem('password');

        if(customerId === customerIds && password === passwords) {
            window.location.href = "home.html";
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});

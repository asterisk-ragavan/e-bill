$(document).ready(function(){
    $("#loginForm").submit(function(event){
        event.preventDefault();
        var userId = $("#userId").val();
        var password = $("#password").val();

        if(userId === "admin" && password === "password") {
            window.location.href = "home.html";
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});

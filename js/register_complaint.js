document.addEventListener("DOMContentLoaded", function() {

    function generateUniqueComplaintId() {
        return Math.floor(100000 + Math.random() * 900000);
    }

    // Event listener for form submission
    document.getElementById("complaintForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        // You can add form validation logic here before proceeding with complaint submission
        // For simplicity, let's assume the form is valid and proceed to the success screen
        var uniqueComplaintId = generateUniqueComplaintId(); // Generate a unique complaint ID
        localStorage.setItem('uniqueComplaintId', uniqueComplaintId);
        window.location.href = "complaint_success.html";
    });

    $("#logoutBtn").click(function() {
        window.location.href = "login.html";
    });

    // Event listener for Cancel button
    document.getElementById("cancelBtn").addEventListener("click", function() {
        window.location.href = "home.html";
    });
});

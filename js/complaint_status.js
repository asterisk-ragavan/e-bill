document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("checkStatusForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
        var complaintId = document.getElementById("complaintId").value; 
        fetchComplaintStatus(complaintId);
    });
});

$("#logoutBtn").click(function() {
    window.location.href = "login.html";
});

function fetchComplaintStatus(complaintId) {
    var dummyComplaintStatus = {
        complaintNumber: "12345",
        complaintCategory: "Billing related",
        complaintStatus: "In Progress",
        dateTimeCreated: "2024-02-14 10:30:00" 
    };

    var complaintStatusDiv = document.getElementById("complaintStatus");
    complaintStatusDiv.innerHTML = `
        <h4>Complaint Status</h4>
        <p><strong>Complaint Number:</strong> ${dummyComplaintStatus.complaintNumber}</p>
        <p><strong>Complaint Category:</strong> ${dummyComplaintStatus.complaintCategory}</p>
        <p><strong>Complaint Status:</strong> ${dummyComplaintStatus.complaintStatus}</p>
        <p><strong>Date and Time Created:</strong> ${dummyComplaintStatus.dateTimeCreated}</p>
    `;
}

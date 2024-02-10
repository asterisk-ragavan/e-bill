document.addEventListener("DOMContentLoaded", function() {
    var uniqueComplaintId = localStorage.getItem('uniqueComplaintId');

    var successMessage = document.getElementById('successMessage');
    successMessage.innerHTML = `Complaint registration successful! Your complaint ID is: <strong>${uniqueComplaintId}</strong>`;
});

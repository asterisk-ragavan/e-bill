var customerId = localStorage.getItem('customerId');
var customerName = localStorage.getItem('customerName');
var customerEmail = localStorage.getItem('customerEmail');
var customerMobile = localStorage.getItem('customerMobile');

document.getElementById('customerId').textContent = customerId;
document.getElementById('customerName').textContent = customerName;
document.getElementById('customerEmail').textContent = customerEmail;
document.getElementById('customerMobile').textContent = customerMobile;

document.getElementById('logoutBtn').addEventListener('click', function() {
    window.location.href = 'login.html';
});

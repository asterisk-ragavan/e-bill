$(document).ready(function(){
    var customerId = localStorage.getItem('customerId');
    var customerName = localStorage.getItem('customerName');
    var customerEmail = localStorage.getItem('customerEmail');
    var customerMobile = localStorage.getItem('customerMobile');
    var title = localStorage.getItem('title')
    $("#userInfo").html(`
        <p><strong>Consumer ID:</strong> ${customerId}</p>
        <p><strong>Title:</strong> ${title} ${customerName}</p>
        <p><strong>Email:</strong> ${customerEmail}</p>
        <p><strong>Mobile:</strong> ${customerMobile}</p>
    `);

    $("#logoutBtn").click(function() {
        window.location.href = "login.html";
    });
});

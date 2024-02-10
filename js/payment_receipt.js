document.addEventListener("DOMContentLoaded", function() {
    // Retrieve payment details from localStorage
    var creditCard = localStorage.getItem('creditCard');
    var cardHolderName = localStorage.getItem('cardHolderName');
    var expiryMonth = localStorage.getItem('expiryMonth');
    var expiryYear = localStorage.getItem('expiryYear');
    var cvv = localStorage.getItem('cvv');
    var modeOfPayment = localStorage.getItem('modeOfPayment');
    var totalPayable = localStorage.getItem('totalPayable');

    // Display payment details on the page
    var paymentDetails = document.getElementById('paymentDetails');
    paymentDetails.innerHTML = `
        <p><strong>Payment Details:</strong></p>
        <p>${modeOfPayment}: ${creditCard}</p>
        <p>Card Holder Name: ${cardHolderName}</p>
        <p>Expiry Month: ${expiryMonth}</p>
        <p>Expiry Year: ${expiryYear}</p>
        <p>Mode of Payment: ${modeOfPayment}</p>
        <p>Total Amount Paid: ${totalPayable}</p>
    `;

    // Event listener for print button
    document.getElementById('printBtn').addEventListener('click', function() {
        window.print();
    });

    $("#logoutBtn").click(function() {
        window.location.href = "login.html";
    });

    // Event listener for download button
    document.getElementById('downloadBtn').addEventListener('click', function() {
        var receiptContent = paymentDetails.innerHTML;
        var filename = "payment_receipt.txt";
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(receiptContent));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    });
});

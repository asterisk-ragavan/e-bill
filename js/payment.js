// Retrieve mode of payment and total payable from localStorage
var modeOfPayment = localStorage.getItem('modeOfPayment');
var totalPayable = localStorage.getItem('totalPayable');

// Display mode of payment and total payable on the page
document.getElementById('modeOfPayment').textContent = modeOfPayment;
document.getElementById('totalPayable').textContent = totalPayable;

// Function to format credit card number with dashes
function formatCreditCardNumber(input) {
    var value = input.value.replace(/\D/g, '');
    var newValue = '';
    for (var i = 0; i < value.length; i++) {
        if (i % 4 == 0 && i > 0) {
            newValue += ' ';
        }
        newValue += value[i];
    }
    input.value = newValue;
}

// Event listener for credit card input to format the number
document.getElementById('creditCard').addEventListener('input', function() {
    formatCreditCardNumber(this);
});

// Function to add leading zero for single-digit numbers
function pad(number) {
    return (number < 10) ? '0' + number : number;
}

// Populate expiry month and year dropdowns with options
var monthSelect = document.getElementById('expiryMonth');
var yearSelect = document.getElementById('expiryYear');
var currentYear = new Date().getFullYear();

for (var i = 1; i <= 12; i++) {
    var month = pad(i);
    var option = document.createElement('option');
    option.text = month;
    option.value = month;
    monthSelect.appendChild(option);
}

for (var i = currentYear; i <= currentYear + 10; i++) {
    var option = document.createElement('option');
    option.text = i.toString().substr(2, 2);
    option.value = i.toString().substr(2, 2);
    yearSelect.appendChild(option);
}

$("#logoutBtn").click(function() {
    window.location.href = "login.html";
});

// Event listener for form submission
document.getElementById('creditCardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form values
    var creditCard = document.getElementById('creditCard').value.replace(/\D/g, ''); 
    var cardHolderName = document.getElementById('cardHolderName').value;
    var expiryMonth = document.getElementById('expiryMonth').value;
    var expiryYear = document.getElementById('expiryYear').value;
    var cvv = document.getElementById('cvv').value;

    // Save form values to localStorage
    localStorage.setItem('creditCard', creditCard);
    localStorage.setItem('cardHolderName', cardHolderName);
    localStorage.setItem('expiryMonth', expiryMonth);
    localStorage.setItem('expiryYear', expiryYear);
    localStorage.setItem('cvv', cvv);

    // Display alert with payment confirmation message
    var alertMessage = "Payment of " + totalPayable + " using " + modeOfPayment + " has been confirmed.";
    alert(alertMessage);

    window.location.href = 'payment_receipt.html';
});

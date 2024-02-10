$(document).ready(function() {
    $('input[name="billSelect"]').change(function() {
        var totalPayable = 0;
        $('input[name="billSelect"]:checked').each(function() {
            var dueAmount = parseFloat($(this).closest('tr').find('td:eq(2)').text().replace('$', ''));
            totalPayable += dueAmount;
        });
        $('#totalPayable').val('$' + totalPayable.toFixed(2));
    });

    $('#makePaymentBtn').click(function() {
        var modeOfPayment = $('#modeOfPayment').val();
        var totalPayable = $('#totalPayable').val();
        localStorage.setItem('modeOfPayment', modeOfPayment);
        localStorage.setItem('totalPayable', totalPayable);

        window.location.href = 'payment.html';
    });
});

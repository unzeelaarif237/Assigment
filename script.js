var balance = 5000;

document.getElementById('withdraw').addEventListener('click', function() {
    var amount = parseInt(document.getElementById('amount').value);
    if (amount > balance) {
        document.getElementById('message').textContent = 'Insufficient funds!';
    } else {
        balance -= amount;
        document.getElementById('balance').textContent = balance;
        document.getElementById('message').textContent = 'Withdrawal successful!';
    }
});

document.getElementById('deposit').addEventListener('click', function() {
    var amount = parseInt(document.getElementById('amount').value);
    balance += amount;
    document.getElementById('balance').textContent = balance;
    document.getElementById('message').textContent = 'Deposit successful!';
});

document.getElementById('check-balance').addEventListener('click', function() {
    document.getElementById('message').textContent = 'Your balance is: ' + balance;
});





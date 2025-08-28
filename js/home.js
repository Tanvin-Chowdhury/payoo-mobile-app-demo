const validPin = 1234;

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('bank-account-number').value;
    const amount = parseInt(document.getElementById('amount').value);
    const pinNumber = parseInt(document.getElementById('pin-number').value);
    const availableBalance = parseInt(document.getElementById('available_balance').innerText);
    
    if(accountNumber.length <11){
        alert('Please provide valid account number');
        return;
    }

    if(pinNumber !== validPin){
        alert('Please provide valid pin number');
        return;
    }

    //console.log(bank, accountNumber, amount,pinNumber, availableBalance);
    const totalAvailableBalance = availableBalance + amount;

    document.getElementById('available_balance').innerText = totalAvailableBalance;


});
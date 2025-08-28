const validPin = 1234;

//add money
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

    const totalAvailableBalance = availableBalance + amount;
    document.getElementById('available_balance').innerText = totalAvailableBalance;
});

//cash out money

document.getElementById('withdraw-money-btn').addEventListener('click', function(e){
    e.preventDefault();

    const amount = parseInt(document.getElementById('amount-withdraw').value);
    const agentAccount = parseInt(document.getElementById('agent-number').value);
    const pinWithdraw = parseInt(document.getElementById('pin-number-withdraw').value);
    const availableBalance = parseInt(document.getElementById('available_balance').innerText);

    if(agentAccount.length <11){
        alert('Please provide valid account number');
        return;
    }

    if(pinWithdraw !== validPin){
        alert('Please provide valid pin number');
        return;
    }

    const totalAvailableBalance = availableBalance - amount;
    document.getElementById('available_balance').innerText = totalAvailableBalance;



});

//toggling feature

document.getElementById('add-money-parent').addEventListener('click',function(){
    document.getElementById('add-money-child').style.display = 'block';
    document.getElementById('cash-out-child').style.display = 'none';
    document.getElementById('transfer-money-child').style.display = 'none';
    document.getElementById('get-bonus-child').style.display = 'none';
    document.getElementById('pay-bill-child').style.display = 'none';
    document.getElementById('transaction-child').style.display = 'none';
});

document.getElementById('cash-out-parent').addEventListener('click',function(){
    document.getElementById('cash-out-child').style.display = 'block';
    document.getElementById('add-money-child').style.display = 'none';
    document.getElementById('transfer-money-child').style.display = 'none';
    document.getElementById('get-bonus-child').style.display = 'none';
    document.getElementById('pay-bill-child').style.display = 'none';
    document.getElementById('transaction-child').style.display = 'none';
});

document.getElementById('transfer-money-parent').addEventListener('click',function(){
    document.getElementById('transfer-money-child').style.display = 'block';
    document.getElementById('add-money-child').style.display = 'none';
    document.getElementById('cash-out-child').style.display = 'none';
    document.getElementById('get-bonus-child').style.display = 'none';
    document.getElementById('pay-bill-child').style.display = 'none';
    document.getElementById('transaction-child').style.display = 'none';
});

document.getElementById('get-bonus-parent').addEventListener('click',function(){
    document.getElementById('get-bonus-child').style.display = 'block';
    document.getElementById('transfer-money-child').style.display = 'none';
    document.getElementById('add-money-child').style.display = 'none';
    document.getElementById('cash-out-child').style.display = 'none';
    document.getElementById('pay-bill-child').style.display = 'none';
    document.getElementById('transaction-child').style.display = 'none';
});

document.getElementById('pay-bill-parent').addEventListener('click',function(){
    document.getElementById('pay-bill-child').style.display = 'block';
    document.getElementById('transfer-money-child').style.display = 'none';
    document.getElementById('add-money-child').style.display = 'none';
    document.getElementById('cash-out-child').style.display = 'none';
    document.getElementById('get-bonus-child').style.display = 'none';
    document.getElementById('transaction-child').style.display = 'none';
});

document.getElementById('transaction-parent').addEventListener('click',function(){
    document.getElementById('transaction-child').style.display = 'block';
    document.getElementById('transfer-money-child').style.display = 'none';
    document.getElementById('add-money-child').style.display = 'none';
    document.getElementById('cash-out-child').style.display = 'none';
    document.getElementById('get-bonus-child').style.display = 'none';
    document.getElementById('pay-bill-child').style.display = 'none';
});
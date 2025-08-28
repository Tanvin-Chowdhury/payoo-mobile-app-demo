//login button functionality

document.getElementById('login-btn').addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber = 12345678910;
    const pinNumber = 1234;

    const mobileNumbervalue = document.getElementById('mobile-number').value;
    const mobileNumbervalueConverted = parseInt(mobileNumbervalue);

    const pinNumbervalue = document.getElementById('pin-number').value;
    const pinNumbervalueConverted = parseInt(pinNumbervalue);

    if(mobileNumbervalueConverted === mobileNumber && pinNumbervalueConverted === pinNumber){
        window.location.href="./home.html";
    }
    else{
        alert("Invalid Credentials")
    }

});


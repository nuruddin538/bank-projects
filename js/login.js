// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit button clicked')
    // step-2 get the email address inside the email input field
    // always remember to use . value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email)
    // console.log(email)
    // step-3: get password
    // set id on the html element
    // get the element
    // get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password)
    // DANGER: DO NOT VERIFY email password on the client side
    // step-4: verify email and password
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Tui password vole gesos!! Toke ami teijjo sontan gosona korlam')
    }
})
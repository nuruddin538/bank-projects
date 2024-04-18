function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    /*
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */ 
   const newDepositAmount = getInputFieldValueById('deposit-field');
    /*
    1. get previous deposit total by id
    */    
   const previousDepositTotal = getTextElementValueById('deposit-total');
    //    console.log(previousDepositTotal);

    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

})

/*
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw total and set the value
4-5. set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
*/ 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('withdraw button clicked')
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

});
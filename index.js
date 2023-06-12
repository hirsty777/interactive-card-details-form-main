// input values
const cardName = document.getElementById('cardholder-name');
const cardNumber = document.getElementById('cardholder-number');
const expDateM = document.getElementById('exp-date-mm');
const expDateY = document.getElementById('exp-date-yy');
const cvc = document.getElementById('cvc');
//elements whenre entered input values will be displayed
const nameDisplay = document.querySelector('.display-card-name');
const numberDisplay = document.querySelector('.display-card-number');
const dateDisplay = document.querySelector('.display-card-date');
const cvcDispaly = document.querySelector('.display-cvc');
//buttons
const confirmBtn = document.getElementById('confirm-btn');
const continueBtn = document.getElementById('continue-btn');


//card name input 
cardName.addEventListener('keyup',()=>{
    nameDisplay.textContent = cardName.value;
});

//card number input 
cardNumber.addEventListener('keyup',()=>{
    numberDisplay.textContent = addSpacing(cardNumber.value);
    
});

//card exp date inputs and cvc
expDateM.addEventListener('keyup',()=>{
    if(!isNaN(expDateM.value)){
        if(expDateY.value.length >0){
            dateDisplay.textContent = expDateM.value +"/"+ expDateY.value
        }else{
            dateDisplay.textContent = expDateM.value
        }
    }else{
        return
    }
});
expDateY.addEventListener('keyup',()=>{
    if(!isNaN(expDateY.value)){
        if(expDateM.value.length >0){
            dateDisplay.textContent = expDateM.value +"/"+ expDateY.value
        }else{
            dateDisplay.textContent = expDateY.value
        }
    }else{
        return
    }
});
cvc.addEventListener('keyup',()=>{
    if(!isNaN(cvc.value)){
        cvcDispaly.textContent = cvc.value
    }else{
        return
    }
});

//spacing after 4 digits
function addSpacing(number) {
    // Convert the number to a string
    var numberString = number.toString();
    // Use a regular expression to match every 4 digits
    var regex = /(\d{4})/g;
    // Insert a space after every 4 digits
    var spacedNumber = numberString.replace(regex, '$1 ');
    return spacedNumber;
}


//buttons actions
const inputsBox = document.querySelector('.inputs-box');
const completeBox = document.querySelector('.complete-state-message');

confirmBtn.addEventListener('click',()=>{
    inputsBox.classList.add('hide');
    completeBox.classList.remove('hide');
});
continueBtn.addEventListener('click',()=>{
    completeBox.classList.add('hide');
    inputsBox.classList.remove('hide');
});


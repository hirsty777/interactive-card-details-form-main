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
//validation text
const nameValidationText = document.getElementById('name-validate-text');
const numberValidationText = document.getElementById('number-validate-text');
const expDateValidationText = document.getElementById('exp-validate-mm-yy');
const cvcValidationTxt = document.getElementById('cvc-validate-text');
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


//===================================================
//buttons (actions)
const inputsBox = document.querySelector('.inputs-box');
const completeBox = document.querySelector('.complete-state-message');
//validation state variables
let nameValidationState = false;
let numberValidationState = false;
let expMValidationState = false;
let expYValidationState = false;
let cvcValidationState = false;
// confirm button actions 
confirmBtn.addEventListener('click',()=>{
    //validate input values before moving on
    validateCardName(cardName.value);
    validateCardNumber(cardNumber.value);
    validateCardExpM(expDateM.value);
    validateCardExpY(expDateY.value);
    validateCardCvc(cvc.value);
    //move on to confirm page if all inputs valid
    if(nameValidationState&&numberValidationState&&
       expMValidationState&&expYValidationState&&cvcValidationState){
        inputsBox.classList.add('hide');
        completeBox.classList.remove('hide');
    }else{
        return 
    }
});
//continue button  
continueBtn.addEventListener('click',()=>{
    location.reload();
});


//validation functions//////////////////////////
//name validation =================
function validateCardName(value){
    let NamePattern = /^[a-zA-Z\s]+$/;
    let NamePatternRes = NamePattern.test(value);
    if(NamePatternRes&&value.length>=2){
        cardName.style.borderColor = 'rgba(35, 180, 35, 0.616)';
        nameValidationText.classList.add('hide');
        nameValidationState = true;
    }else{
        cardName.style.borderColor = 'red';
        nameValidationText.classList.remove('hide');
        nameValidationState = false;
    }
};

//number validation  =============
function validateCardNumber(value){
    if(!isNaN(value)&&value.length==16){
        cardNumber.style.borderColor = 'rgba(35, 180, 35, 0.616)';
        numberValidationText.classList.add('hide');
        numberValidationState = true;
    }else{
        cardNumber.style.borderColor = 'red';
        numberValidationText.classList.remove('hide');
        numberValidationState = false;
    }
};

//expire Month validation ========
function validateCardExpM(value){
    if(!isNaN(value)&&value.length==2){
        expDateM.style.borderColor = 'rgba(35, 180, 35, 0.616)';
        expMValidationState = true;
    }else{
        expDateM.style.borderColor = 'red';
        expDateValidationText.classList.remove('hide');
        expMValidationState = false;
    }
};
//expire Year validation ========
function validateCardExpY(value){
    if(!isNaN(value)&&value.length==2){
        expDateY.style.borderColor = 'rgba(35, 180, 35, 0.616)';
        expYValidationState = true;
    }else{
        expDateY.style.borderColor = 'red';
        expYValidationState = false;
    }
};
//cvc validation =====
function validateCardCvc(value){
    if(!isNaN(value)&&value.length==3){
        cvc.style.borderColor = 'rgba(35, 180, 35, 0.616)';
        expYValidationState = true;
        cvcValidationState = true;
    }else{
        cvc.style.borderColor = 'red';
        cvcValidationTxt.classList.remove('hide');
        cvcValidationState = false;
    }
}
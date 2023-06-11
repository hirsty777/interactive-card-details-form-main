// input values
const cardName = document.getElementById('cardholder-name');
const cardNumber = document.getElementById('cardholder-number');
//elements whenre entered input values will be displayed
const nameDisplay = document.querySelector('.display-card-name');
const numberDisplay = document.querySelector('.display-card-number');



//card name input 
cardName.addEventListener('keyup',()=>{
    nameDisplay.textContent = cardName.value;
});

//card number input 
cardNumber.addEventListener('keyup',()=>{
    numberDisplay.textContent = addSpacing(cardNumber.value);
    
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
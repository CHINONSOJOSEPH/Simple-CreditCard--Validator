// a program that validates Visa Card
const visacardDigits = ('');

function validateVisa(visacardDigits) {
    const visacardvalidator = /^2[0-9]{11}([0-9]{4})$/;
    
    if (visacardvalidator.exec(visacardDigits)) {
      console.log("This is a  valid visa card ");
      return true;
    } else {
      console.log("This is an Invalid Visa card,please check the card number and try again!!");
      return null;
    }
  }
  //Enter the visa card Numbers for validation
  //for example 2111111111111888 was used in this case
 console.log (validateVisa('2111111111111888'))

 // a program that vaildates Master card

 const masterCardDigits = ('');

 function validatemaster(mastercardDigits) {
    const mastercardvalidator = /^5[0-1]{1}[0-9]{10}([0-2]{4})$/;
    
    if (mastercardvalidator.exec(mastercardDigits)) {
      console.log("This is a  valid master card ");
      return true;
    } else {
      console.log("This is an Invalid master card,please check the card number and try again!!");
      return false;
    }
  }

     

console.log (validatemaster('5199110770270202'))

// This validates a Verve Card

const verveCardDigits = ('');
function validateVerve(verveCardDigits) {
    const verveCardvalidator = /^5[0-0]{1}[0-9]{14}$/;
    if (verveCardvalidator.exec(verveCardDigits)) {
        console.log("This is a valid Verve card");
        return true;
    } else {
    console.log("This is an invalid verve verveCardDigits, please check the card digits and try again!!")
    return false
}
}

console.log(validateVerve('5078721666821928'))
# Simple-CreditCard--Validator for visaCard
This is a javascript program that is used to validate credit card
This programm validates a visa card,Master card and a verve card
Regex was used to formulate meta characters is used in formulating the card validator formulars in the code
the card digits must be in a string provided in the code
the visacard validator is /^2[0-9]{11}([0-9]{4})$/
which implies the following
^ and $ ensures that it must begin with a string and end with a string
The valid visa card must start with digit 2 and a total of 16 digits and the last four digits can be any number
.exec is used it testing the match in the function validate visa
To see resuct/test; console.log (validateVisa('VISACARD DIGITS'))

## Simple-CreditCard--Validator for MasterCard
Regex was used to formulate meta characters is used in formulating the card validator formulars in the code
the card digits must be in a string provided
the masterCard Validator is /^5[0-1]{1}[0-9]{10}([0-2]{4})$/
which implies that ,the card digits must be with a string
The Valid MasterCard must start with digit 5 followed by 0 or 1
the last four digits must me between 0-2 and a total of 16 digits in the card
To test for A master card; 
console.log (validatemaster(MastercardDigits)

## Simple-CreditCard--Validator for Verve CARD
Regex was used to formulate meta characters is used in formulating the card validator formulars in the code
the card digits must be in a string provided
THE VERVE card regex  validator is  /^5[0-0]{1}[0-9]{14}$/
which will match card digits that start with 50 and a total of 16 digits
to test for verveCARD console.log(validateVerve('VERVE CARD DIGITS')

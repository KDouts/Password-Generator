// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";



var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

var characterBank = [];

console.log(upperAlpha);
// Write password to the #password input
function writePassword() {
  var length = prompt("How long is your password?", "8-128");
  console.log(length);
  if (length > 128 || length < 8){
    
    alert( length + " is not an appropriate length.");
  
    writePassword();
  
  }

  var hasUpper = confirm("Does your password contain Uppercase characters?");

  if (hasUpper === true) {
    characterBank += upperAlpha
  }

  var hasLower = confirm("Does your password contain Lowercase characters?");

  if (hasLower === true) {
    characterBank += lowerAlpha
  }

  var hasSpecial = confirm("Does your password contain Special characters?",);

  if (hasSpecial === true) {
    characterBank += symbols
  }

  var hasNumber = confirm("Does your password contain numbers?",);
  
  if (hasNumber === true) {
    characterBank += numbers
  }

  var password = generatePassword(length, hasUpper, hasLower, hasSpecial, hasNumber);
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(length, hasUpper, hasLower, hasSpecial, hasNumber) {
  var password = "";
  console.log(length, hasUpper, hasLower, hasSpecial, hasNumber);
  for ( let i = 0; i < length; i++) {
    password += characterBank[Math.floor(Math.random() * characterBank.length)];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


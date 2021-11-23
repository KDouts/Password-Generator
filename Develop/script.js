// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";



var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

console.log(upperAlpha);
// Write password to the #password input
function writePassword() {
  var length = prompt("How long is your password?", "8-128");
  var hasUpper = confirm("Does your password contain Uppercase characters?");
  var hasLower = confirm("Does your password contain Lowercase characters?");
  var hasSpecial = confirm("Does your password contain Special characters?",);
  var hasNumber = confirm("Does your password contain numbers?",);
  
  var password = generatePassword(length, hasUpper, hasLower, hasSpecial, hasNumber);
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(length, hasUpper, hasLower, hasSpecial, hasNumber) {
  var characterBank = [];
  var password = "";
  if (length > 128){
    // if (null === length) return false;
    length = 128;
    // alert( length ' is not a valid response');
    // return;
  }
  console.log(length, hasUpper, hasLower, hasSpecial, hasNumber);

  //if has-blank- then add string to characterBank
  if (hasUpper === true) {
    characterBank += upperAlpha
  }

  if (hasLower === true) {
    characterBank += lowerAlpha
  }

  if (hasSpecial === true) {
    characterBank += symbols
  }

  if (hasNumber === true) {
    characterBank += numbers
  }

  for ( let i = 0; i < length; i++) {
    password += characterBank[Math.floor(Math.random() * characterBank.length)];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


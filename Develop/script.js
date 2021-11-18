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
  var length = prompt("How long is your password?", "maximun allowed: 128");
  var hasUpper = prompt("Does your password contain Uppercase characters?", "Yes or No");
  var hasLower = prompt("Does your password contain Lowercase characters?", "Yes or No");
  var hasSpecial = prompt("Does your password contain Special characters?", "Yes or No");
  var hasNumber = prompt("Does your password contain numbers?", "Yes or No");
  
  var password = generatePassword(length, hasUpper, hasLower, hasSpecial, hasNumber);
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(length, hasUpper, hasLower, hasSpecial, hasNumber) {
  var characterBank = "";
  var password = "";
  if (length > 128){
    length = 128;
  }
  console.log(length, hasUpper, hasLower, hasSpecial, hasNumber);

  //if has-blank- then add string to characterBank
  if (hasUpper === "yes") {
    characterBank += upperAlpha
  }

  if (hasLower === "yes") {
    characterBank += lowerAlpha
  }

  if (hasSpecial === "yes") {
    characterBank += symbols
  }

  if (hasNumber === "yes") {
    characterBank += numbers
  }

  for ( let i = 0; i < characterBank.length; i++) {
    password += characterBank[Math.floor(Math.random() * length)];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


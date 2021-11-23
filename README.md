# Password-Generator
Password generator involving uppercase, lowercase, numbers, and special characters.

The first operation that had be done when making the password generator was making an array for each variable: Uppercase, lowercase, numbers and special characters.

After the variables were set the function needed to be created. That was done by prompting a yes or no question for each variable.

When prompted for the length the consumer would be able to pick a number up to 128 characters and that would be stored for the generatePassword function that would call on it later.

When each varible is given the answer yes the array would be moved into a new variable labled characterBank that held all of the characters together.

After the variable had it's length set and the varibles added to the characterBank array the for function would take the length that had been selected do Math.random to pick random characters in the array and assemble them into the string that would display on the page as a randomly generated password.

https://kdouts.github.io/Password-Generator/
// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var userInput = window.prompt("How many characters would you like your password to be?")

  var passwordCharacterLength = parseInt(userInput)

  if (isNaN(passwordCharacterLength)) {
    window.alert("That is not a number!")
    return
  } 

  if (passwordCharacterLength < 8 || passwordCharacterLength > 128) {
    window.alert("Password must be between 8 and 128 characters in length")
    return
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

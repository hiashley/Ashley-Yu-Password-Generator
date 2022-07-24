// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays of all the possible characters
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '~', '`']
// Write password to the #password input
function generatePassword() {
  // Prompts user input
  var enterCharacters = prompt("How many characters would you like your password to be? Must be between 8 to 128 characters.");
// Tells user the mandatory criteria
  if (!enterCharacters) {
    alert("You need to input a value.");
    return
  } else if (enterCharacters < 8 || enterCharacters > 128) {
    enterCharacters = prompt("You must choose between 8 and 128 characters.")
    return
  }
  // Confirms which of the criteria the user would like in their password.
  var confirmLowercase = confirm("Would you like lowercase letters?");
  var confirmUppercase = confirm("Would you like uppercase letters?");
  var confirmNumbers = confirm ("Would you like numbers?");
  var confirmSpecial = confirm ("Would you like special characters?");

  // Empty variable
  var generator = []

  // Conditions needed to be met
  if (confirmLowercase === true) {
    generator = generator.concat(lowerCase);
  }

  if (confirmUppercase === true) {
    generator = generator.concat(upperCase);
  }

  if (confirmNumbers === true) {
    generator = generator.concat(numbers);
  }

  if (confirmSpecial === true) {
    generator = generator.concat(special);
  }
  // Logs onto console
  console.log(generator);

  // Empty variable
  randomPassword = []

  // Randomizes user's choices
  for (var i = 0; i < enterCharacters; i++) {
    randomizer = generator[Math.floor(Math.random() * generator.length)];
    randomPassword.push(randomizer);
  }

  // Creates a new string by concatenating all of the array values. Without this, we wouldn't get anything to show in the textbox.
  return randomPassword.join("") ;

}

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = 0




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword(){
  var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'()*+,-./:;<=>?@[^_`{|}~"
  var length = prompt("Enter disired password length 8-128 charecters");
  if (length > 129 || length < 8) { alert("Please enter a number between 8 and 128!!");

  } else{
    var ok = confirm("would you like to use special characters?");

        if (ok === true) {
          console.log("special characters");
        } else {
          charSet = charSet.replace("!'()*+,-./:;<=>?@[^_`{|}~", '');
          console.log("no special characters");}
    
  } 
    var ok1 = confirm("would you like to use capital leters");
        if (ok1 === true) {
          console.log("caps");
        } else {
          charSet = charSet.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", '');
          console.log("no caps");
    
        }
    var ok3 = confirm("would you like to use lowercase leters");
        if (ok3 === true) {
          console.log("lowers");
        } else {
          charSet = charSet.replace("abcdefghijklmnopqrstuvwxyz", '');
          console.log("no lowers");
    
  }
    var ok2 = confirm("Would you like to use numbers?");
        if (ok2 === true) {
          console.log("num");
        } else {
          charSet = charSet.replace("0123456789", '');
          console.log("no num");
        }

        var mystery = ''
        for (var i = 0, n = charSet.length; i < length; ++i) {
            mystery += charSet.charAt(Math.floor(Math.random() * n));
        }
  return mystery;
        }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



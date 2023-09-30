// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function askLength() { //asking for length of password
 var numchar = prompt("Length of your password"); 
  return numchar;
};

function askNum() {
    let num = confirm("Do you want to include numbers?");
    if (num) {
       var numlist = "0123456789";
    } else {
     var numlist = " ";
    
    }
    return numlist;
    };

function askUppercase() {
    let letter = confirm("Do you want uppercase letters in your password?");
  if (letter) {
   var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   
  } else {
    var uppercase = " ";

  }
  return uppercase;
};
function askLowercase() {
    let letter2 = confirm("Do you want lowercase letters in your password?");
    if (letter2) {
        var lowerCase = "abcdefghijclmnopqrstuvwxyz";
    } else {
       var lowerCase = " ";
    }
    return lowerCase;
};
function askSpecial() {
    let specialChar = confirm("Do you want to include special characters?");
    if (specialChar) {
        var special = " ! # $ % &'()*+,-./:;<=>?@[^_`{|}~";
    } else {
        var special = " ";
    }
        return special;
    }
function generatePassword() {
    // askLength();
    // askNum();
    // askLowercase();
    // askUppercase();
    // askSpecial();
    // var characters = special + lowerCase + uppercase + numlist;
    var characters = askNum() + askSpecial() + askLowercase() + askUppercase();
    console.log(characters);
    let newpassword = " ";
    var howlong = askLength();
    // for (var i; i <= askLength();i++) {
        while (howlong >= newpassword.length) {
    
    newpassword += characters[Math.floor(Math.random() * characters.length)];
    
    
    }
    console.log(newpassword);
    return newpassword;
};

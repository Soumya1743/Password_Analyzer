var Input = document.getElementById("psw");
var letter = document.getElementById("letter");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
Input.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
Input.onblur = function() {
  document.getElementById("message").style.display = "none";
}


// When the user starts to typing
Input.onkeyup = function() {
  if(Input.value.length < 6){
    const message = document.getElementById("message");
    message.innerHTML = "Your Password is Weak!";
    message.style.boxShadow = "0px 10px 10px #FF9292";
    message.style.backgroundColor = "#FF9292";
    message.style.color = "white";
    message.style.fontSize = "20px";
  }
  else{
    var upperCase = /[A-Z]/;
    var lowerCase = /[a-z]/;
    if(Input.value.match(upperCase) && Input.value.match(lowerCase)){
        message.innerHTML = "Your Password is Normal!";
        message.style.boxShadow = "0px 10px 10px rgb(241, 200, 138)";
        message.style.backgroundColor = "rgb(241, 200, 138)";
        message.style.color = "white";
        message.style.fontSize = "20px";
    }

    var number = /[0-9]/;
    var special = /[!-=]/;
    if(Input.value.match(number) && Input.value.match(special) && Input.value.match(upperCase) && Input.value.match(lowerCase)){
        message.innerHTML = "Your Password is Strong!";
        message.style.backgroundColor = "#99DDCC";
        message.style.boxShadow = "0px 10px 10px #99DDCC";
        message.style.color = "white";
        message.style.fontSize = "20px";
    }
  }

  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/;
  if(Input.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } 
  else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/;
  if(Input.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } 
  else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/;
  if(Input.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } 
  else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(Input.value.length >= 6) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } 
  else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
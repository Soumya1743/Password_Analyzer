var Input = document.getElementById("password");


Input.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

Input.onblur = function() {
  document.getElementById("message").style.display = "none";
}

var upperCase = /[A-Z]/;
var lowerCase = /[a-z]/;
var numbers = /[0-9]/;
var special = /[!-=]/;

Input.onkeydown = function() {
  if(Input.value.length < 6){
    const message = document.getElementById("message");
    message.innerHTML = "Your Password is Weak!";
    message.style.boxShadow = "0px 10px 10px #FF9292";
    message.style.backgroundColor = "#FF9292";
    message.style.color = "white";
    message.style.fontSize = "20px";
  }
  else{
    if(Input.value.match(upperCase) && Input.value.match(lowerCase)){
        message.innerHTML = "Your Password is Normal!";
        message.style.boxShadow = "0px 10px 10px rgb(241, 200, 138)";
        message.style.backgroundColor = "rgb(241, 200, 138)";
        message.style.color = "white";
        message.style.fontSize = "20px";
    }

    if(Input.value.match(numbers) && Input.value.match(special) && Input.value.match(upperCase) && Input.value.match(lowerCase)){
        message.innerHTML = "Your Password is Strong!";
        message.style.backgroundColor = "#99DDCC";
        message.style.boxShadow = "0px 10px 10px #99DDCC";
        message.style.color = "white";
        message.style.fontSize = "20px";
    }
  }

}
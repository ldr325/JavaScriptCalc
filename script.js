var halfButton = document.getElementById("halfButton");

halfButton.addEventListener("click",halfNumber);

function halfNumber(){

  var numInput = document.getElementById("half-input").value;
  var halfNum = numInput / 2;
  alert("Half of " + numInput + " is " + halfNum);
  console.log(halfNum);
}

var fortuneButton = document.getElementById("fortuneButton");

fortuneButton.addEventListener("click",fortune);

function fortune() {
  var fortunes = [" Nothing lost is nothing gained", " A fresh start will put you on your way", " A new perspective will come with the new year", " Listen to the cat", " A pleasant surprise is waiting for you"];

  var randFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  var nameInput = document.getElementById("fortune-input").value;
  var output = document.getElementById("fortune-output");

  if(nameInput != ""){
    output.innerHTML = randFortune;
    console.log(randFortune);
  }
  else{
    alert("Enter a name dummy");
  }
}

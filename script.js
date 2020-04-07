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

var output = document.getElementById("fortune-output");

function fortune() {
  var fortunes = [" Nothing lost is nothing gained", " A fresh start will put you on your way", " A new perspective will come with the new year", " Listen to the cat", " A pleasant surprise is waiting for you", " Jack fit on the door"];

  var randFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  var nameInput = document.getElementById("fortune-input").value;

  if(nameInput != ""){
    output.innerHTML = nameInput + ", I want you to know: " + randFortune;
    console.log(randFortune);
  }
  else{
    alert("Enter a name dummy");
  }
}

function restyle(){
  var color = ["red","brown","yellow","green","blue"];
  var colorRand = color[Math.floor(Math.random() * color.length)];

  var sizeRand = Math.floor(Math.random() * 100);

  document.body.style.backgroundColor = colorRand;
  output.style.fontSize = sizeRand + "px"
}

fortuneButton.addEventListener("click",restyle);

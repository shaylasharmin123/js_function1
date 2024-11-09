
// change style
function imgChange(){
  document.getElementById('ic').src="images/man3.jpg";
}

// change style
function changeColor(){
  document.getElementById('cc').style.color="green";
}

// change style
function changeSize(){
  document.getElementById('sc').style.fontSize="40px";
}

//show/hide content
function textShow(){
  document.getElementById('sh').style.display="block";
}
function textHide(){
  document.getElementById('sh').style.display="none";
}

// change style
function changeStyle(){
  document.getElementById('cs').style.border="1px solid red";
}

// on/off light
function bulbOn(){
  document.getElementById('bulb').src="images/bulbon.gif"
}
function bulbOff (){
  document.getElementById('bulb').src="images/bulboff.gif";
}

//show date
function showDate(){
  document.getElementById('sd').innerHTML = Date();
}

// change text
function changeText(){
  document.getElementById('ct').innerHTML = "hello there";
}

//show text
function showText(){
  document.getElementById('st').innerHTML="HELLOW WORLD";
}
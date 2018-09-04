var picker = document.querySelectorAll('input, button'),
  picker = new CP(picker[0]);
var buttons = document.querySelectorAll('button');
var slider = document.getElementsByClassName("rangeslider__handle");

picker.on("change", function(color) {
  this.target.innerHTML = '#' + color;
  this.target.value = '#' + color;
  document.body.style.backgroundColor = '#' + color;
  slider[0].style.background = '#' + color;
  slider[1].style.background = '#' + color;
  buttons[0].addEventListener("mouseover", function(e) {
    document.getElementById("button000").style.color = '#' + color;
  });
  buttons[0].addEventListener("mouseout", function(e) {
    document.getElementById("button000").style.color = '#ffffff';
  });
  buttons[1].addEventListener("mouseover", function(e) {
    document.getElementById("button001").style.color = '#' + color;
  });
  buttons[1].addEventListener("mouseout", function(e) {
    document.getElementById("button001").style.color = '#ffffff';
  });
  buttons[2].addEventListener("mouseover", function(e) {
    document.getElementById("button002").style.color = '#' + color;
  });
  buttons[2].addEventListener("mouseout", function(e) {
    document.getElementById("button002").style.color = '#ffffff';
  });
});

var picker = document.querySelectorAll('input, button'),
  picker = new CP(picker[0]);
var buttons = document.querySelectorAll('button');
var slider = document.getElementsByClassName("rangeslider__handle");
var hexColor;

if ($(window).width() > $(window).height()) {
  picker.on("change", function(color) {
    this.target.innerHTML = '#' + color;
    this.target.value = '#' + color;
    hexColor = '#' + color;
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

  function print() {
    domtoimage.toPng(document.getElementById('squares'), {
      quality: 1,
      // bgcolor: 'transparent',
      bgcolor: hexColor,
      style: { 'margin': '7.5vw 0 0 8.5vw'},
      height: 500,
      width: 525
    })
    .then(function(dataUrl) {
      var link = document.createElement('a');
      link.download = 'rethink:web.png';
      link.href = dataUrl;
      link.click();
    });
  }

} else {
  picker.on("change", function(color) {
    rBg = Math.floor(Math.random() * 255);
    gBg = Math.floor(Math.random() * 255);
    bBg = Math.floor(Math.random() * 255);

    backgroundColor002 = "rgb(" + Math.round(rBg) + "," + Math.round(gBg) + "," + Math.round(bBg) + ")";

    function rgb2hex(rgb) {
      rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
    }
    var hex = rgb2hex(backgroundColor002);
    this.target.innerHTML = hex;
    this.target.value = hex;
    slider[0].style.background = hex;
    slider[1].style.background = hex;
    document.body.style.backgroundColor = hex;
    document.getElementById("button001").style.color = hex;
    document.getElementById("button001").style.backgroundColor = '#ffffff';
    document.getElementById("button003").style.color = hex;
    document.getElementById("button003").style.backgroundColor = '#ffffff';
  });
}

var squares;
var curves;

function generate() {
  var duration = 1000;

  /******** RESET ANIMATION ********/
  var c = document.getElementById("squares").children;
  for (var i = 0; i < c.length; i++) {
    c[i].style.backgroundColor = "#ffffff";
    $(c[i])
    .css({
      borderTopLeftRadius:curivness,
      borderTopRightRadius:curivness,
      borderBottomLeftRadius:curivness,
      borderBottomRightRadius:curivness})
    .animate({
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }, duration);
  }
  /******** END RESET ANIMATION ********/

  /******** RANDOM GENERATOR FUNCTION ********/
  var gen_nums = [];
  function in_array(array, el) {
    for (var i = 0; i < array.length; i++)
      if (array[i] == el) return true;
    return false;
  }

  function get_rand(array) {
    var rand = array[Math.floor(Math.random() * array.length)];
    if (!in_array(gen_nums, rand)) {
      gen_nums.push(rand);
      return rand;
    }
    return get_rand(array);
  }
  /******** END RANDOM GENERATOR FUNCTION ********/

  /******** RANDOM GENERATOR FOR SQUARES ********/
  var totalSquares = 30;
  var totalRand = squares;
  var totalCorners = 4;
  var curivness = curves;

  var nums = [];
  for (var i = 0; i < totalSquares; i++) {
    nums.push(i);
  }

  var numCurves = [];
  for (var i = 0; i < curivness; i++) {
    numCurves.push(i);
  }

  var targetSquares = [];
  var targetCurves = [];
  var targetCorner = [];
  console.log("************** SQUARE : CORNER : CURVES **************")
  for (var i = 0; i < totalRand; i++) {
    targetSquares.push(get_rand(nums));
    targetCurves.push(get_rand(numCurves));
    targetCorner.push(Math.floor(Math.random() * totalCorners))
    console.log(targetSquares[i] + " : " + targetCorner[i] + " : " + targetCurves[i])
  }
  console.log("*****************************************************")
  /******** END RANDOM GENERATOR FOR SQUARES ********/

  /******** ANIMATE BORDER RADIUS ********/
  // /******** CURVES = RANDOM ********/
  if (curves >= 3 && curves <= 60) {
    for (var i = 0; i < totalRand; i++) {
      if (targetCorner[i] == 0) {
        $(c[targetSquares[i]])
        .css({
          borderTopLeftRadius:0})
        .animate({
          borderTopLeftRadius: targetCurves[i]}, duration);
      }
      else if (targetCorner[i] == 1) {
        $(c[targetSquares[i]])
        .css({
          borderTopRightRadius:0})
        .animate({
          borderTopRightRadius: targetCurves[i]}, duration);
      }
      else if (targetCorner[i] == 2) {
        $(c[targetSquares[i]])
        .css({
          borderBottomRightRadius:0})
        .animate({
          borderBottomRightRadius: targetCurves[i]}, duration);
      }
      else if (targetCorner[i] == 3) {
        $(c[targetSquares[i]])
        .css({
          borderBottomLeftRadius:0})
        .animate({
          borderBottomLeftRadius: targetCurves[i]}, duration);
      }
    }
  }
  /******** END CURVES = RANDOM ********/


  // /******** CURVES = 100 ********/
  else if (curves > 60) {
    curivness = 70;
    for (var i = 0; i < totalRand; i++) {
      if (targetCorner[i] == 0) {
        $(c[targetSquares[i]])
        .css({
          borderTopLeftRadius:0})
        .animate({
          borderTopLeftRadius: curivness}, duration);
      }
      else if (targetCorner[i] == 1) {
        $(c[targetSquares[i]])
        .css({
          borderTopRightRadius:0})
        .animate({
          borderTopRightRadius: curivness}, duration);
      }
      else if (targetCorner[i] == 2) {
        $(c[targetSquares[i]])
        .css({
          borderBottomRightRadius:0})
        .animate({
          borderBottomRightRadius: curivness}, duration);
      }
      else if (targetCorner[i] == 3) {
        $(c[targetSquares[i]])
        .css({
          borderBottomLeftRadius:0})
        .animate({
          borderBottomLeftRadius: curivness}, duration);
      }
    }
  }
  else if (curves < 3) {
    curivness = 0;
    for (var i = 0; i < totalRand; i++) {
      if (targetCorner[i] == 0) {
        $(c[targetSquares[i]])
        .css({
          borderTopLeftRadius:0})
        .animate({
          borderTopLeftRadius: curivness}, duration);
      }
      else if (targetCorner[i] == 1) {
        $(c[targetSquares[i]])
        .css({
          borderTopRightRadius:0})
        .animate({
          borderTopRightRadius: curivness}, duration);
      }
      else if (targetCorner[i] == 2) {
        $(c[targetSquares[i]])
        .css({
          borderBottomRightRadius:0})
        .animate({
          borderBottomRightRadius: curivness}, duration);
      }
      else if (targetCorner[i] == 3) {
        $(c[targetSquares[i]])
        .css({
          borderBottomLeftRadius:0})
        .animate({
          borderBottomLeftRadius: curivness}, duration);
      }
    }
  }


  // /******** END CURVES = 100 ********/
  /******** END ANIMATE BORDER RADIUS ********/
}

function print() {
  domtoimage.toPng(document.getElementById('squares'), {
    quality: 1,
    bgcolor: 'transparent',
    height: 438,
    width: 435
  })
  .then(function(dataUrl) {
    var link = document.createElement('a');
    link.download = 'rethink.png';
    link.href = dataUrl;
    link.click();
  });
}

$('input[type="range1"]').rangeslider({
    polyfill: false,

    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider--disabled',
    horizontalClass: 'rangeslider--horizontal',
    verticalClass: 'rangeslider--vertical',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',

    onInit: function() {

    },

    onSlide: function(position, value) {
    },

    onSlideEnd: function(position, value) {
        squares = this.value;
        console.log("squares: " + squares);
    }
});

$('input[type="range2"]').rangeslider({
    polyfill: false,
    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider--disabled',
    horizontalClass: 'rangeslider--horizontal',
    verticalClass: 'rangeslider--vertical',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',

    onInit: function() {

    },

    onSlide: function(position, value) {
    },

    onSlideEnd: function(position, value) {
        curves = this.value;
        console.log("curves: " + curves);
    }
});

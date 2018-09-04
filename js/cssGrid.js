// var c = document.getElementById("squares").children;
// // console.log(c.length)
//
// for (var i = 0; i < c.length; i++) {
//   // console.log(c[i])
// }
//
// var rand1 = Math.floor(Math.random() * 30);
// var rand2 = Math.floor(Math.random() * 30);
// var rand3 = Math.floor(Math.random() * 30);
// var rand4 = Math.floor(Math.random() * 30);
// var rand5 = Math.floor(Math.random() * 30);
// var rand6 = Math.floor(Math.random() * 30);
// var rand7 = Math.floor(Math.random() * 30);
// var rand8 = Math.floor(Math.random() * 30);
//
// var radRand1 = Math.floor(Math.random() * 100);
// var radRand2 = Math.floor(Math.random() * 100);
// var radRand3 = Math.floor(Math.random() * 100);
// var radRand4 = Math.floor(Math.random() * 100);
// var radRand5 = Math.floor(Math.random() * 100);
// var radRand6 = Math.floor(Math.random() * 100);
// var radRand7 = Math.floor(Math.random() * 100);
// var radRand8 = Math.floor(Math.random() * 100);
//
// radRand1 = radRand1.toString()
// radRand2 = radRand2.toString()
// radRand3 = radRand3.toString()
// radRand4 = radRand4.toString()
// radRand5 = radRand5.toString()
// radRand6 = radRand6.toString()
// radRand7 = radRand7.toString()
// radRand8 = radRand8.toString()
//
//
//
// if (rand1 == rand2 || rand1 == rand3 || rand1 == rand4) {
//   rand1 = Math.floor(Math.random() * 30);
//   rand2 = Math.floor(Math.random() * 30);
//   rand3 = Math.floor(Math.random() * 30);
//   rand4 = Math.floor(Math.random() * 30);
// } else if (rand2 == rand1 || rand2 == rand3 || rand2 == rand4) {
//   rand1 = Math.floor(Math.random() * 30);
//   rand2 = Math.floor(Math.random() * 30);
//   rand3 = Math.floor(Math.random() * 30);
//   rand4 = Math.floor(Math.random() * 30);
// } else if (rand3 == rand1 || rand3 == rand2 || rand3 == rand4) {
//   rand1 = Math.floor(Math.random() * 30);
//   rand2 = Math.floor(Math.random() * 30);
//   rand3 = Math.floor(Math.random() * 30);
//   rand4 = Math.floor(Math.random() * 30);
// }
//
// c[rand2].style.borderTopRightRadius = radRand2 + "px";
// c[rand3].style.borderBottomRightRadius = radRand3 + "px";
// c[rand4].style.borderBottomLeftRadius = radRand4 + "px";
// c[rand5].style.borderTopLeftRadius = radRand5 + "px";
// c[rand6].style.borderTopRightRadius = radRand6 + "px";
// c[rand7].style.borderBottomRightRadius = radRand7 + "px";
// c[rand8].style.borderBottomLeftRadius = radRand8 + "px";

//
// var cssProperties = anime({
//   targets: '.grid > *',
//   borderBottomRightRadius: ['100px'],
//   easing: 'easeInOutQuad',
//   duration: 1750
// });

// html2canvas(document.querySelector("#squares")).then(function(canvas) {
//   document.body.appendChild(canvas);
// });

// html2canvas(document.body, {
//   backgroundColor: "#0000ff",
//   width: 435,
//   height: 436
// }).then(function(canvas) {
//   document.body.appendChild(canvas);
//   console.log('Drew on the existing canvas');
// });

// domtoimage.toPng(document.getElementById('squares'), { quality:1, bgcolor: 'transparent',height: 450, width: 455 })
//     .then(function (dataUrl) {
//         var link = document.createElement('a');
//         link.download = 'my-image-name.png';
//         link.href = dataUrl;
//         link.click();
// });

//
// function filter (node) {
//     return (node.tagName !== 'i');
// }

// domtoimage.toSvg(document.getElementById('squares'), {quality:1, bgcolor: 'transparent',height: 450, width: 455})
// .then(function (dataUrl) {
//     var link = document.createElement('a');
//     link.download = 'my-image-name.svg';
//     link.href = dataUrl;
//     link.click();
// });

// var node = document.getElementById('squares');
//
// domtoimage.toPng(node)
// .then(function (dataUrl) {
//     var img = new Image();
//     img.src = dataUrl;
//     var link = document.createElement('a');
//     link.download = 'my-image-name.png';
//     link.href = dataUrl;
//     link.click();
// })
// .catch(function (error) {
//     console.error('oops, something went wrong!', error);
// });

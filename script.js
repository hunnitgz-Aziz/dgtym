var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});
let filmSection = document.getElementById("film");
let btnFilm = document.getElementById("toggle-film");
let albumSection = document.getElementById("album");
let btnAlbum = document.getElementById("toggle-album");
let lyricsBtns = document.querySelectorAll("#album button");
let logo = document.getElementById("logo-container");
// let logos = document.querySelectorAll(".logo");
let images = document.querySelectorAll(".polaroids > div");
let c = document.querySelector(".CANVAS");
let btnWatch = document.getElementById("watchFilm");
let filmContainer = document.querySelector('.film-container');
let albumContainer = document.querySelector('.album-container');
let resizer = document.getElementById("resizer");
let creditsLines = document.querySelectorAll("#credits i");
let gifs = document.querySelectorAll(".gif");

let switchTime = new Date('April 22, 2021 23:59:59').getTime();
let rightNow = new Date().getTime();


// var dateInPast = function(firstDate, secondDate) {
//   if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
//     return true;
//   }
//   return false;
// };

// console.log(switchTime, rightNow);

if (rightNow < switchTime){
  document.querySelector(".film-container").classList.add("for-youtube-stream");
  console.log("NOT YET")
} else {
  console.log("past")
}

// console.log(switchTime, now);

let mouseIsDown = false;

let bgColors = ["orange", "purple", "green", "red"];

function pickRandomColor(arr,excludeNum){
    var randomColor = Math.floor(Math.random()*arr.length);
    if(arr[randomColor]==excludeNum){
        return pickRandomColor(arr,excludeNum);
    }else{
        return randomColor;
    }
}

setTimeout(function(){
  document.querySelector(".video1").style.display = "block";
},3000)

setTimeout(function(){
  document.querySelector(".video1").style.display = "none";
},15000)

let colorClass = 2;


let gif = gifs[Math.floor(Math.random()*gifs.length)];
gif.style.display="block";
let interval = 4500;

if (gif.classList.contains("songname")){
  interval = 8000;
  // console.log("SONG NAME")
} 

setInterval(function(){
    if (!gif.classList.contains("songname")){
      gif.style.display="none";
    } else {
      let _this = gif;
      setTimeout(function(){
        _this.style.display="none";
      },3000)
    }
    
    gif = gifs[Math.floor(Math.random()*gifs.length)];
    
    let this_src = gif.src;
    gif.src = "";
    gif.src = this_src;
    gif.style.display="block";
},interval)


function showFilmSection(){
    filmSection.style.transform = "translateY(0px)";
    albumSection.style.transform = "translateY(100%)";
    btnFilm.style.zIndex = 3;
    btnAlbum.style.zIndex = 1;
    document.body.classList.add("page-open");
    document.body.classList.remove("album-open");
    document.body.classList.add("film-open");
    // logo.querySelector(".logo").src="/img/DGTYM_logo_Grey.png";
    // document.querySelector(".letter").style.display = "none";
    document.querySelector(".bg").style.display = "none";
    
    document.body.classList.remove(bgColors[colorClass]);
    // console.log(colorClass);
    colorClass = pickRandomColor(bgColors,colorClass);
    // console.log(colorClass);
    document.body.classList.add(bgColors[colorClass]);

    ctx.clearRect(0, 0, el.width, el.height);

    for (let i of creditsLines){
      
      // if (i.getBoundingClientRect().top <= window.innerHeight){
        i.style.animation="appearIn 1s "+Math.random()*1+"s linear both";
      // }
      
      
    }

}
// filmSection.onscroll=function(){
//   for (let i of creditsLines){
//       if (i.getBoundingClientRect().top <= window.innerHeight){
//         i.style.animation="appearIn 1s "+Math.random()*2+"s linear both";
//       } 
//   }
// }
function showAlbumSection(){
    filmSection.style.transform = "translateY(-100%)";
    albumSection.style.transform = "translateY(0px)";
    btnFilm.style.zIndex = 1;
    btnAlbum.style.zIndex = 3;
    document.body.classList.add("page-open");
    document.body.classList.add("album-open");
    document.body.classList.remove("film-open");
    // logo.querySelector(".logo").src="/img/DGTYM_logo_Grey.png";
    // document.querySelector(".letter").style.display = "none";
    document.querySelector(".bg").style.display = "none";

    document.body.classList.remove(bgColors[colorClass]);
    // console.log(colorClass);
    colorClass = pickRandomColor(bgColors,colorClass);
    // console.log(colorClass);
    document.body.classList.add(bgColors[colorClass]);

    ctx.clearRect(0, 0, el.width, el.height);

}
function showMainSection(){
    filmSection.style.transform = "translateY(-100%)";
    albumSection.style.transform = "translateY(100%)";
    document.body.classList.remove("page-open");
    document.body.classList.remove("album-open");
    document.body.classList.remove("film-open");
    // logo.querySelector(".logo").src="/img/DGTYM_logo_Green.png"
    // document.querySelector(".letter").style.display = "block";
    document.querySelector(".bg").style.display = "block";
}

logo.onclick=function(){showMainSection()}

for (let btn of lyricsBtns){
    btn.onclick=function(){
        this.classList.toggle("active");
        if (this.innerHTML === "Hide Lyrics") {
          this.innerHTML = "Show Lyrics";
        } else {
          this.innerHTML = "Hide Lyrics";
        }
    }
}

document.addEventListener("mousemove", function(e){
    found = Array.prototype.slice.call(images).some(function(img) {
        let bounds = img.getBoundingClientRect();
        return e.clientY > bounds.top && e.clientY < bounds.bottom && e.clientX > bounds.left && e.clientX < bounds.right;
    });

    if (found){
        c.style.zIndex = 2;
        c.style.pointerEvents = "none";
        // console.log("FOUND")
    } else {
        c.style.zIndex = 7;
        c.style.pointerEvents = "auto";
        // console.log("NOT FOUND")
    }


    if (!mouseIsDown){
      let moveX = map(e.clientX,0,window.innerWidth,-5,5);
      let moveY = map(e.clientY,0,window.innerHeight,-5,5)
      document.querySelector(".polaroids").style.transform = "translateX("+moveX+"px) translateY("+moveY+"px)"
    }

})

for (let img of images){
  // console.log(parseInt(img.style.left));

  // console.log(pxToVh(parseInt(img.style.left)) );
  // img.style.left = pxToVh(parseInt(img.style.left)) + "vh";
  // img.style.top = pxToVh(parseInt(img.style.top)) + "vh";


  // img.style.top = Math.random()*100 + "%";
  // img.style.transform = "rotate("+(Math.random()*5 + 87.5)+"deg)" 
  img.style.animationDelay = Math.random() + "s";
}




// left: 4.48161vw; top: 2.44444vh;


function pxToVw(px){
    return map(px, 0, window.innerWidth, 0, 100)
}
function pxToVh(px){
    return map(px, 0, window.innerHeight, 0, 100)
}

// document.onmousemove=function(e){
    // console.log(e.target);
    // if (e.target.classList.contains("polaroids")){
    //     console.log("POLAROIDS");
    // }

    // found = Array.prototype.slice.call(images).some(function(img) {
    //     let bounds = img.getBoundingClientRect();
    //     return e.clientY > bounds.top && e.clientY < bounds.bottom && e.clientX > bounds.left && e.clientX < bounds.right;
    // });

    // console.log(found);

    // if (found){
    //     c.style.zIndex = 2;
    //     c.style.pointerEvents = "none";
    // } else {
    //     c.style.zIndex = 8;
    //     c.style.pointerEvents = "auto";
    // }

    // for (let img of images){
    //     let bounds = img.getBoundingClientRect();
    //     if (e.clientY > bounds.top && e.clientY < bounds.bottom && e.clientX > bounds.left && e.clientX < bounds.right){
    //         console.log("IMAGE DETECTED");
    //         c.style.zIndex = 2;
    //         c.style.pointerEvents = "none";
    //         break;
    //     } else {
    //         c.style.zIndex = 8;
    //         c.style.pointerEvents = "auto";
    //         console.log("NO IMAGE");
    //     }
    // }
// }

// c.style.zIndex = 8;

// for (let img of images){
//     img.onmouseover=function(){console.log("mouse over")}
//     img.onmouseenter=function(){console.log("mouse enter")}
// }

document.addEventListener("mousedown", function(){
  mouseIsDown = true;
})
document.addEventListener("mouseup", function(){
  mouseIsDown = false;
})


//Make the DIV element draggagle:
for (let img of images){
    dragImage(img)
}
dragElement(filmContainer);
dragElement(albumContainer);
// dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    

    if (e.target != resizer){
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    }
    // elmnt.style.transform = "rotate("+ (Math.random() * 4 + 88) +"deg) scale(1.08)";
    // elmnt.style.zIndex = "2";
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    // elmnt.style.transform = "rotate("+ (Math.random() * 5 + 87) +"deg) scale(1)";
    // elmnt.style.zIndex = "0";
  }
}


function dragImage(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    elmnt.style.transform = "rotate("+ (Math.random() * 4 + 88) +"deg) scale(1.05)";
    elmnt.style.zIndex = "2";
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.left = (elmnt.offsetLeft + pos2) + "px";
    elmnt.style.top = (elmnt.offsetTop - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.style.transform = "rotate("+ (Math.random() * 5 + 87) +"deg) scale(1)";
    elmnt.style.zIndex = "0";
  }
}

document.getElementById("main").onwheel=function(){
    c.style.zIndex = 2;
}


// Play vimeo video on button click
// let playing = false;
// var videoRectangle = document.getElementById('videoRectangle');
// var iframe = videoRectangle.childNodes[0];
// var player = $f(iframe);
// btnWatch.onclick=function(){
//     if (!playing) {
//     player.api("play");
//     } else {
//     player.api("pause"); 
//     }
//     playing = playing ? false : true;
//     btnWatch.classList.toggle("watching");
// }


// Resize video
var startX, startY, startWidth, startHeight;
function initDrag(e) {
   startX = e.clientX;
   startY = e.clientY;
   startWidth = parseInt(document.defaultView.getComputedStyle(filmContainer).width, 10);
   startHeight = parseInt(document.defaultView.getComputedStyle(filmContainer).height, 10);
   document.documentElement.addEventListener('mousemove', doDrag, false);
   document.documentElement.addEventListener('mouseup', stopDrag, false);
}

function doDrag(e) {
   filmContainer.style.width = (startWidth + e.clientX - startX) + 'px';
   filmContainer.style.height = (startHeight - e.clientY + startY) + 'px';
  //  console.log(startHeight, e.clientY, startY)
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);    
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
}

resizer.addEventListener('mousedown', initDrag, false);


// var canvas = new fabric.Canvas('sheet');
// canvas.isDrawingMode = true;
// canvas.setHeight(window.innerHeight);
// canvas.setWidth(window.innerWidth);
// canvas.freeDrawingBrush.width = 4;
// canvas.freeDrawingBrush.color = "rgba(184, 185, 184,0.92)";
// // console.log(canvas);


var el = document.getElementById('sheet');
var ctx = el.getContext('2d');
var isDrawing;

el.width = document.body.clientWidth; //document.width is obsolete
el.height = window.innerHeight; //document.height is obsolete

// el.onmousedown = function(e) {
//   isDrawing = true;
//   ctx.lineWidth = 1;
//   ctx.strokeStyle = "rgba(184, 185, 184,0.6)";
//   ctx.lineJoin = ctx.lineCap = 'round';
//   ctx.shadowBlur = 1.5;
//   ctx.shadowColor = 'rgba(184, 185, 184,0.6)';
  
//   ctx.moveTo(e.clientX, e.clientY);
// };
// el.onmousemove = function(e) {
//   if (isDrawing) {
//     ctx.lineTo(e.clientX, e.clientY);
    
//     ctx.stroke();
//   }
// };
// el.onmouseup = function() {
//   isDrawing = false;
// };


// DRAW TYPE 2

ctx.strokeStyle = "rgba(184, 185, 184,0.6)";

ctx.lineWidth = 2;
ctx.lineJoin = ctx.lineCap = 'round';
ctx.shadowBlur = 1;
ctx.shadowColor = 'rgba(184, 185, 184,0.6)';
ctx.lineJoin = ctx.lineCap = 'round';

var isDrawing, lastPoint;

el.onmousedown = function(e) {
  isDrawing = true;
  lastPoint = { x: e.clientX, y: e.clientY };
};

el.onmousemove = function(e) {
  if (!isDrawing) return;

  ctx.beginPath();
  
  ctx.globalAlpha = 1;
  ctx.moveTo(lastPoint.x, lastPoint.y);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  
  // ctx.moveTo(lastPoint.x - 4, lastPoint.y - 4);
  // ctx.lineTo(e.clientX - 4, e.clientY - 4);
  // ctx.stroke();
  
  ctx.moveTo(lastPoint.x - 1, lastPoint.y - 1);
  ctx.lineTo(e.clientX - 1, e.clientY - 1);
  ctx.stroke();
  
  ctx.moveTo(lastPoint.x + 1, lastPoint.y + 1);
  ctx.lineTo(e.clientX + 1, e.clientY + 1);
  ctx.stroke();
  
  // ctx.moveTo(lastPoint.x + 4, lastPoint.y + 4);
  // ctx.lineTo(e.clientX + 4, e.clientY + 4);
  // ctx.stroke();
    
  lastPoint = { x: e.clientX, y: e.clientY };
};

el.onmouseup = function() {
  isDrawing = false;
};



function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}




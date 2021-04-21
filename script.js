let filmSection = document.getElementById("film");
let btnFilm = document.getElementById("toggle-film");
let albumSection = document.getElementById("album");
let btnAlbum = document.getElementById("toggle-album");
let lyricsBtns = document.querySelectorAll("#album button");
let logo = document.getElementById("logo");
let images = document.querySelectorAll(".polaroids > div");
let c = document.querySelector(".CANVAS");
let btnWatch = document.getElementById("watchFilm");
let filmContainer = document.querySelector('.film-container');
let albumContainer = document.querySelector('.album-container');
let resizer = document.getElementById("resizer");
let creditsLines = document.querySelectorAll("#credits i");
let gifs = document.querySelectorAll(".gif");

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
},2000)

let colorClass = 2;


let gif = gifs[Math.floor(Math.random()*gifs.length)];
gif.style.display="block";
setInterval(function(){
    gif.style.display="none";
    gif = gifs[Math.floor(Math.random()*gifs.length)];
    gif.style.display="block";
},5000)


function showFilmSection(){
    filmSection.style.transform = "translateY(0px)";
    albumSection.style.transform = "translateY(100%)";
    btnFilm.style.zIndex = 3;
    btnAlbum.style.zIndex = 1;
    document.body.classList.add("page-open");
    document.body.classList.remove("album-open");
    document.body.classList.add("film-open");
    logo.querySelector(".logo").src="/img/DGTYM_logo_Grey.png";
    // document.querySelector(".letter").style.display = "none";
    document.querySelector(".bg").style.display = "none";
    
    document.body.classList.remove(bgColors[colorClass]);
    console.log(colorClass);
    colorClass = pickRandomColor(bgColors,colorClass);
    console.log(colorClass);
    document.body.classList.add(bgColors[colorClass]);

    for (let i of creditsLines){
      
      // if (i.getBoundingClientRect().top <= window.innerHeight){
        i.style.animation="appearIn 1s "+Math.random()*2+"s linear both";
        setTimeout(function(){
          i.style.animation = "none";
        },1000)
      // }
      
      i.onmouseenter=function(){
        i.style.animation="zoomIn 1s linear both";
        setTimeout(function(){
          i.style.animation = "none";
        },1000)
      }
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
    logo.querySelector(".logo").src="/img/DGTYM_logo_Grey.png";
    // document.querySelector(".letter").style.display = "none";
    document.querySelector(".bg").style.display = "none";

    document.body.classList.remove(bgColors[colorClass]);
    console.log(colorClass);
    colorClass = pickRandomColor(bgColors,colorClass);
    console.log(colorClass);
    document.body.classList.add(bgColors[colorClass]);
}
function showMainSection(){
    filmSection.style.transform = "translateY(-100%)";
    albumSection.style.transform = "translateY(100%)";
    document.body.classList.remove("page-open");
    document.body.classList.remove("album-open");
    document.body.classList.remove("film-open");
    logo.querySelector(".logo").src="/img/DGTYM_logo_Green.png"
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
        c.style.zIndex = 10000;
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
  img.style.left = pxToVh(parseInt(img.style.left)) + "vh";
  img.style.top = pxToVh(parseInt(img.style.top)) + "vh";

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
   console.log(startHeight, e.clientY, startY)
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);    
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
}

resizer.addEventListener('mousedown', initDrag, false);


var canvas = new fabric.Canvas('sheet');
canvas.isDrawingMode = true;
canvas.setHeight(window.innerHeight);
canvas.setWidth(window.innerWidth);
canvas.freeDrawingBrush.width = 3;
canvas.freeDrawingBrush.color = "rgba(184, 185, 184,0.7)";
console.log(canvas);


function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}




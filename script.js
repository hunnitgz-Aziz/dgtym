let filmSection = document.getElementById("film");
let btnFilm = document.getElementById("toggle-film");
let albumSection = document.getElementById("album");
let btnAlbum = document.getElementById("toggle-album");
let lyricsBtns = document.querySelectorAll("#album button");
let logo = document.getElementById("logo");
let images = document.querySelectorAll(".polaroids > div");
let c = document.querySelector("canvas");

function showFilmSection(){
    filmSection.style.transform = "translateY(0px)";
    albumSection.style.transform = "translateY(100%)";
    btnFilm.style.zIndex = 3;
    btnAlbum.style.zIndex = 1;
    document.body.classList.add("page-open");
}
function showAlbumSection(){
    filmSection.style.transform = "translateY(-100%)";
    albumSection.style.transform = "translateY(0px)";
    btnFilm.style.zIndex = 1;
    btnAlbum.style.zIndex = 3;
    document.body.classList.add("page-open");
}
function showMainSection(){
    filmSection.style.transform = "translateY(-100%)";
    albumSection.style.transform = "translateY(100%)";
    document.body.classList.remove("page-open");
}

logo.onclick=function(){showMainSection()}

for (let btn of lyricsBtns){
    btn.onclick=function(){
        this.classList.toggle("active");
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
    } else {
        c.style.zIndex = 8;
        c.style.pointerEvents = "auto";
    }
})

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


//Make the DIV element draggagle:
for (let img of images){
    dragElement(img)
}
// dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
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
    elmnt.style.transform = "rotate("+ (Math.random() * 4 + 88) +"deg) scale(1.03)";
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
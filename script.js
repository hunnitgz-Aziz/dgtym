let filmSection = document.getElementById("film");
let btnFilm = document.getElementById("toggle-film");
let albumSection = document.getElementById("album");
let btnAlbum = document.getElementById("toggle-album");

function showFilmSection(){
    filmSection.style.transform = "translateY(0px)";
    albumSection.style.transform = "translateY(100%)";
    btnFilm.style.zIndex = 3;
    btnAlbum.style.zIndex = 1;
}
function showAlbumSection(){
    filmSection.style.transform = "translateY(-100%)";
    albumSection.style.transform = "translateY(0px)";
    btnFilm.style.zIndex = 1;
    btnAlbum.style.zIndex = 3;
}
function showMainSection(){
    filmSection.style.transform = "translateY(0px)";
    albumSection.style.transform = "translateY(0px)";
}
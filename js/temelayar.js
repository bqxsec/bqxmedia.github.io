setTimeout(onyukleme, 1750);

function onyukleme() {
  document.getElementById("onyukleme").style.visibility = "hidden";
  document.getElementById("onyukleme").style.opacity = "0%";
}

function pusula() {
    document.getElementById("nav").style.marginLeft = "0vh";
    document.getElementById("pusula").style.marginLeft = "27vh";
}

function kapat() {
    document.getElementById("nav").style.marginLeft = "-100vh";
    document.getElementById("pusula").style.marginLeft = "4vh";
}

function kayitac() {
    document.getElementById("kayit-ol-div").style.opacity = "100%";
    document.getElementById("kayit-ol-div").style.visibility = "visible";
}

function kayitkapat() {
    document.getElementById("kayit-ol-div").style.opacity = "0";
    document.getElementById("kayit-ol-div").style.visibility = "hidden";
}

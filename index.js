setTimeout(onyukleme1, 300);

function onyukleme1() {
document.getElementById("yanaz3").style.visibility = "hidden";
document.getElementById("yanaz3").style.opacity = "0%";
document.getElementById("yanaz2").style.visibility = "hidden";
document.getElementById("yanaz2").style.opacity = "0%";
document.getElementById("yanaz1").style.visibility = "visible";
document.getElementById("yanaz1").style.opacity = "100%";
document.getElementById("imzam").style.visibility = "visible";
document.getElementById("imzam").style.opacity = "100%";
}

setTimeout(onyukleme2, 2500);

function onyukleme2() {
document.getElementById("yanaz3").style.visibility = "hidden";
document.getElementById("yanaz3").style.opacity = "0%";
document.getElementById("yanaz2").style.visibility = "visible";
document.getElementById("yanaz2").style.opacity = "100%";
document.getElementById("yanaz1").style.visibility = "hidden";
document.getElementById("yanaz1").style.opacity = "0%";
}

setTimeout(onyukleme3, 5000);

function onyukleme3() {
document.getElementById("yanaz3").style.visibility = "visible";
document.getElementById("yanaz3").style.opacity = "100%";
document.getElementById("yanaz2").style.visibility = "hidden";
document.getElementById("yanaz2").style.opacity = "0%";
document.getElementById("yanaz1").style.visibility = "hidden";
document.getElementById("yanaz1").style.opacity = "0%";
}

setTimeout(onyukleme4, 6000);

function onyukleme4() {
document.getElementById("yanazyukleme").style.visibility = "hidden";
document.getElementById("yanazyukleme").style.opacity = "0%";
document.getElementById("yanaz3").style.visibility = "hidden";
document.getElementById("yanaz3").style.opacity = "0%";
document.getElementById("yanaz2").style.visibility = "hidden";
document.getElementById("yanaz2").style.opacity = "0%";
document.getElementById("yanaz1").style.visibility = "hidden";
document.getElementById("yanaz1").style.opacity = "0%";
document.getElementById("imzam").style.visibility = "hidden";
document.getElementById("imzam").style.opacity = "0%";
}
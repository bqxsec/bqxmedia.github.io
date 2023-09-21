function anasayfa() {
    setTimeout(gecis, 750);
        function gecis() {
            document.getElementById("onyukleme").style.visibility = "hidden";
            document.getElementById("onyukleme").style.opacity = "0%";
            document.getElementById("anasayfa-div").style.display = "block";
            document.getElementById("portfolyo-div").style.display = "none";
            document.getElementById("iletisim-div").style.display = "none";
            document.getElementById("ortaklik-div").style.display = "none";
        }
    document.getElementById("onyukleme").style.opacity = "100%";
    document.getElementById("onyukleme").style.visibility = "visible";
}

function portfolyo() {
    setTimeout(gecis, 750);
    function gecis() {
        document.getElementById("onyukleme").style.visibility = "hidden";
        document.getElementById("onyukleme").style.opacity = "0%";
        document.getElementById("anasayfa-div").style.display = "none";
        document.getElementById("portfolyo-div").style.display = "block";
        document.getElementById("iletisim-div").style.display = "none";
        document.getElementById("ortaklik-div").style.display = "none";
    }
    document.getElementById("onyukleme").style.opacity = "100%";
    document.getElementById("onyukleme").style.visibility = "visible";
}

function iletisim() {
    setTimeout(gecis, 750);
    function gecis() {
        document.getElementById("onyukleme").style.visibility = "hidden";
        document.getElementById("onyukleme").style.opacity = "0%";
        document.getElementById("anasayfa-div").style.display = "none";
        document.getElementById("portfolyo-div").style.display = "none";
        document.getElementById("iletisim-div").style.display = "block";
        document.getElementById("ortaklik-div").style.display = "none";
    }
    document.getElementById("onyukleme").style.opacity = "100%";
    document.getElementById("onyukleme").style.visibility = "visible";
}

function ortaklik() {
    setTimeout(gecis, 750);
    function gecis() {
        document.getElementById("onyukleme").style.visibility = "hidden";
        document.getElementById("onyukleme").style.opacity = "0%";
        document.getElementById("anasayfa-div").style.display = "none";
        document.getElementById("portfolyo-div").style.display = "none";
        document.getElementById("iletisim-div").style.display = "none";
        document.getElementById("ortaklik-div").style.display = "block";
    }
    document.getElementById("onyukleme").style.opacity = "100%";
    document.getElementById("onyukleme").style.visibility = "visible";
}
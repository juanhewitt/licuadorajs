let estadoLicuadora = "apagado";
let licuadora = document.getElementById("blender");
let boton = document.getElementById("blender-button");
let sonido1 = document.getElementById("sonido1");
let sonido2 = document.getElementById("sonido2");


boton.addEventListener("click", (e) => {
    if (estadoLicuadora == "apagado") {
        estadoLicuadora = "prendido";
        licuadora.classList = "active";
        hacersonidos();
        console.log("me prendiste");
    } else { 
        estadoLicuadora = "apagado";
        licuadora.classList = "";
        hacersonidos();
        console.log("me apagaste");
    }
});

function hacersonidos() {
    if (sonido2.paused){
        sonido1.play();
        sonido2.play();
    } else {
        sonido1.play();
        sonido2.pause();
        sonido2.currentTime = 0;
    }
}





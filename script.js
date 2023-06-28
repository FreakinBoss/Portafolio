//Funciona que aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionada
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Desaparecer el menú una vez que se ha seleccionada una opción en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//Funcion que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//Detectar el scroll del usuario para aplicar la animacion de las barras de habilidades
window.onscroll = function(){
    efectoHabilidades()
};

//Aplicar la animación de las barras de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barraprogreso1");
        document.getElementById("css").classList.add("barraprogreso2");
        document.getElementById("js").classList.add("barraprogreso3");
    }
}
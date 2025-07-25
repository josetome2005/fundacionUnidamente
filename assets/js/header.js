var boton_menu = document.querySelector(".img_icono_menu");
var menu = document.querySelector(".header_nav");
var abierto = false;
var body = document.querySelector("body")

boton_menu.addEventListener("click", function(){

    if(abierto == false){
        menu.style.marginLeft = "0";
        body.style.maxHeight = "100vh";
        body.style.overflowY = "hidden";
    }else{
        menu.style.marginLeft = "-100%";
        body.style.maxHeight = "auto";
        body.style.overflowY = "scroll";
    }
    
    abierto = !abierto;

})
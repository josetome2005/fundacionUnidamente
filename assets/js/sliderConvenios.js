var contenedor_convenios = document.querySelector(".convenios_nacionales");

var longitud_pantalla = window.innerWidth;

console.log(longitud_pantalla);

function agregarConvenios(){

    var limiteDeConjuntos = 4;

    if(longitud_pantalla < 700){
        limiteDeConjuntos = 6;
    }

    console.log("Limite Conjunto: " + limiteDeConjuntos);

    for(i = 0; i < limiteDeConjuntos; i ++){

        var conjunto = document.createElement("div");
        conjunto.classList.add("conjunto_convenios", "conjunto_convenios"+i+1);

        var limiteCantidadImagenesPorConjunto = 6;

        if(longitud_pantalla < 700){
            limiteCantidadImagenesPorConjunto = 4;
        }

        console.log("Limite imagenes: " + limiteCantidadImagenesPorConjunto);

        
        for(j = 0; j < limiteCantidadImagenesPorConjunto; j++){

            if(j + limiteCantidadImagenesPorConjunto*i + 1 <= 22){
                var img = document.createElement("img");
                img.src = "assets/img/convenios/nacionales/conv"+ (j + limiteCantidadImagenesPorConjunto*i + 1) + ".png" ;

                conjunto.appendChild(img);
            }

        }

        contenedor_convenios.appendChild(conjunto); 

    }

}

agregarConvenios();

/*----------------- FUNCIONALIDAD SLIDER -----------*/

var flecha_atras = document.querySelector(".flecha_convenio_atras");
var flecha_adelante = document.querySelector(".flecha_convenio_adelante");

var contenedor_convenios = document.querySelector(".convenios_nacionales");

var pagina = 0;

var maximaPagina = 3;
var minimaPagina = 0;

if(longitud_pantalla < 700){
    maximaPagina = 5;
}


flecha_adelante.addEventListener("click", function(){

    if(pagina == maximaPagina){
        contenedor_convenios.style.marginLeft = "0%";
        pagina = 0;

    }else{
        contenedor_convenios.style.marginLeft = (pagina+1)*(-100) + "%";
        pagina++;
    }

    

})

flecha_atras.addEventListener("click", function(){

    if(pagina == 0){
        contenedor_convenios.style.marginLeft = "-300%";
        pagina = 3;

    }else{
        contenedor_convenios.style.marginLeft = (pagina-1)*(-100) + "%";
        pagina--;
    }

    

})
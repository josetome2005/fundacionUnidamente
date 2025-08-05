var contenedor_convenios = document.querySelector(".convenios_nacionales");

function agregarConvenios(){

    for(i = 0; i < 4; i ++){

        var conjunto = document.createElement("div");
        conjunto.classList.add("conjunto_convenios", "conjunto_convenios"+i+1);


        for(j = 0; j < 6; j++){

            if(j + 6*i + 1 <= 22){
                var img = document.createElement("img");
                img.src = "assets/img/convenios/nacionales/conv"+ (j + 6*i + 1) + ".png" ;

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

flecha_adelante.addEventListener("click", function(){

    if(pagina == 3){
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
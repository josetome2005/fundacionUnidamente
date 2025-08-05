var longitudPantalla = window.innerWidth;

if(longitudPantalla < 700){


    /*----------------- FUNCIONALIDAD SLIDER -----------*/

    var flecha_atras = document.querySelector(".flecha_testimonio_atras");
    var flecha_adelante = document.querySelector(".flecha_testimonio_adelante");

    var contenedor_testimonios = document.querySelector(".testimonios_container");

    var paginaTestimonio = 0;

    var maximaPaginaTest = 2;
    var minimaPaginaTest = 0;


    flecha_adelante.addEventListener("click", function(){

        if(paginaTestimonio == maximaPaginaTest){
            contenedor_testimonios.style.marginLeft = "0%";
            paginaTestimonio = 0;

        }else{
            contenedor_testimonios.style.marginLeft = (paginaTestimonio+1)*(-100) + "%";
            paginaTestimonio++;
        }

        

    })

    flecha_atras.addEventListener("click", function(){

        if(paginaTestimonio == 0){
            contenedor_testimonios.style.marginLeft = "-200%";
            paginaTestimonio = 2;

        }else{
            contenedor_testimonios.style.marginLeft = (paginaTestimonio-1)*(-100) + "%";
            paginaTestimonio--;
        }

        

    })

}
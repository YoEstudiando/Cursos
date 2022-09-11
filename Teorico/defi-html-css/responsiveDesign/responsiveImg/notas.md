<div class="picture">
        <img src="" alt="">
</div>
.picture
{
    width:500px;
    height:400px;
}
una mala practica, para nada responsive, solo limita el crecimiento de la imagen.

Buena practica usar la etiqueta picture:
        <picture>
            <source media="(min-width:1300px)" srcset="./img/large.jpg">
            <source media="(min-width:1000px)" srcset="./img/medium.jpg">
            <img src="./img/small.jpg" alt="Es una imagen de ejemplo">
        </picture>
y el css tiene un img con un width:100%;
source esta etiqueta carga contenido extra una vez se cumple la media. 
La etiqueta source va por tamaño, quien tiene el la media mas grande va primero y los que son menores, van atras en orden.

el width: 100%; en tu mejor en imagenes, en contenedores padre.
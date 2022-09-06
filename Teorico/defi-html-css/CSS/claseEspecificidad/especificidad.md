Importancia
Especificidad
Orden en las Fuentes

Importancia:
    1. Hoja de estilo de agente de usuario (Estilos del navegador).(Del navegador del usuario)
        Primero el navegador impone los estilos de las etiquetas por defecto.
    2.Declaracion normales en hojasde estilo de autor(Nuestro.css)
        Segundo nosotros el decimos qué estilos deben ser las etiquetas.
    3.Declaraciones importantes en hojas estilos de autor(utilizar el !important).
        Si existe la ESPECIFICIDAD(o selector) de !important usara eso por encima de todo, es mala práctiva, se ve normalmente cuando el fronted no puede aplicar estilos, y usar el !important para "obligar" a que sea como el quiera.

Especificidad:
    Selectores      Especificidad
    !important       1.0.0.0.0      
    inline styles    0.1.0.0.0   
    #id              0.0.1.0.0             
    .class           0.0.0.1.0
    tah              0.0.0.0.1
            El quinto lugar representa el de menor valor y el primero el de máximo valor.
<!-- Los inline styles son aquel que se usa css en la misma equita sin darle ningun selector se le pone estilo ahi mismo.
        <p style="color:red">Hola</p>
  -->

Orden de las fuentes:
En tus estilos, las declaraciones al final del documentoo anularán a las que sucean antes en caso de conflicto.
    Si llamamos a un id o class tanto al principio como al final, el navegador tomara el final como el mas importante y lo mostrará, eso puede sobreescribir tu codigo del principio.



<img src="./Captura desde 2022-09-04 14-01-00.png" alt="Reglas de cascada">

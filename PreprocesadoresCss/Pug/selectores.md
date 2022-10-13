Selector universal --> *
Selector de etiqueta(elemento) -> Mayor especificidad. -> p{}; h1,h2,h3,h4,h5{}.
Selector anidado -> p span {}, dos selectores.
Selector ID -> especifico para un selector.No se puede replicar. #p
Selector de clase -> Es posible reutilzar con otros selectores. .p
Selector de hijos -> mas especifico p > span {}. Un contenedor con un elemento o contendor hijo
Selector Adyacente -> Se sigue uno con otro, <h2>blbl</h2> <h2>bllasd</h2> css: h2 + h2 {color:red}.
Selector de Atributos -> uso en formularios: input[type="email"]<- cualquier input con tipo email se aplica {border:red;}

Prioridad de una regla CSS
!important = muy alto (Nunca utilizar, solo en codigo fuente ajeno)
ID = 100;
class = 10;
Etiqueta(selector)  = 1;
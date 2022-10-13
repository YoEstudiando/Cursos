Css va en cascada, lo último es cuando css lo toma como "verdadero", si ponemos un estilo al principio y lineas abajo ponemos otro estilo entonces css tomara el ultimo.Pero si un selector tiene una mayor espicificidad que otra, tomara la mas pesada(ID)


h1 {color:blue}
h1 -> Selector.
color:blue ->Declaración.
color -> propiedad.
blue -> valor.
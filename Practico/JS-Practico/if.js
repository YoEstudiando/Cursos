var jugador = 'papel';
var pc = 'papel';
var resultado;

function ganador (jugador, pc)
{

	if(jugador === pc)
    {

		return resultado = 'empate';
	}

	if((jugador == 'piedra' && pc == 'papel') || (jugador == 'papel' && pc == 'tijera') || (jugador == 'tijera' && pc == 'piedra')){

		return resultado = 'Gana PC';
    }

	else if((jugador == 'piedra' && pc == 'tijera') || (jugador == 'papel' && pc == 'piedra') || (jugador == 'tijera' && pc == 'papel')){

		return resultado = 'Gana Jugador';
    }

	else
    {

		return resultado = 'Ingrese valores correctos';
    }
}
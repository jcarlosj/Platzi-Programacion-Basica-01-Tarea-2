//-> FUNCIONES
//   Genero un número aleatorio entre un rango de enteros.
function aleatorio( minimo, maximo ) {
 	return Math .floor( Math .random() * ( maximo - minimo + 1 ) - minimo );
} // Finaliza aleatorio( minimo, maximo )

//-> INICIO
//   Variables Globales.
var opciones = [ 'Piedra', 'Papel', 'Tijera', 'Lagarto', 'Spoke' ], 	//: Opciones existentes para jugar.
	opcionUsuario = 0;													//: Valor por defecto del usuario.

//-> Capturo elección del usuario.
opcionUsuario = prompt( '¿Qué eliges?\nPiedra: 0 \tLagarto: 3\nPapel: 1 \tSpock: 4\nTijera: 2', 0 );

//-> Valido elección del usuario (en el rango de 0 hasta la cantidad de opciones del arreglo) .
if( parseInt( opcionUsuario ) >= 0 && parseInt( opcionUsuario ) < opciones .length ) {

	var mensaje = '';
	alert( 'Elegiste: ' + opciones[ parseInt( opcionUsuario ) ] );

	//-> Capturo la elección aleatoria. 
	var opcionMaquina = aleatorio( 0, ( opciones .length - 1 ) );		
	alert( 'La máquina eligió: ' + opciones[ opcionMaquina ] );

	//-> Comparo elecciones y se ditamina un Ganador.
	if( opciones[ opcionUsuario ] == opciones[ opcionMaquina ] ) {
		mensaje += 'Empate!';
	}
	else {
		//-> Tres únicas condiciones con que hacen a un usuario ganador.
		if( opciones[ opcionUsuario ] == 'Piedra' && opciones[ opcionMaquina ] == 'Lagarto' ) {
			mensaje += 'Ganaste! Piedra aplasta Lagarto';
		}
		else {
			if( opciones[ opcionUsuario ] == 'Piedra' && opciones[ opcionMaquina ] == 'Tijera' ) {
				mensaje += 'Ganaste! Piedra rompe Tijera';
			}
			else {
				if( opciones[ opcionUsuario ] == 'Tijera' && opciones[ opcionMaquina ] == 'Papel' ) {
					mensaje += 'Ganaste! Tijera corta Papel';
				} 
				else {
					if( opciones[ opcionUsuario ] == 'Tijera' && opciones[ opcionMaquina ] == 'Lagarto' ) {
						mensaje += 'Ganaste! Tijera decapita Lagarto';
					}
					else {
						if( opciones[ opcionUsuario ] == 'Papel' && opciones[ opcionMaquina ] == 'Spoke' ) {
							mensaje += 'Ganaste! Papel desaprueba Spoke';
						}
						else {
							if( opciones[ opcionUsuario ] == 'Papel' && opciones[ opcionMaquina ] == 'Piedra' ) {
								mensaje += 'Ganaste! Papel cubre Piedra';
							}
							else {
								if( opciones[ opcionUsuario ] == 'Spoke' && opciones[ opcionMaquina ] == 'Piedra' ) {
									mensaje += 'Ganaste! Spoke vaporiza Piedra';
								}
								else {
									if( opciones[ opcionUsuario ] == 'Spoke' && opciones[ opcionMaquina ] == 'Tijera' ) {
										mensaje += 'Ganaste! Spoke rompe Tijera';
									}
									else {
										if( opciones[ opcionUsuario ] == 'Lagarto' && opciones[ opcionMaquina ] == 'Spoke' ) {
											mensaje += 'Ganaste! Lagarto envenena Spoke';
										}	
										else {
											if( opciones[ opcionUsuario ] == 'Lagarto' && opciones[ opcionMaquina ] == 'Papel' ) {
												mensaje += 'Ganaste! Lagarto come Papel';
											}
											else {
												mensaje += 'Perdiste!';
											}
										}
									}	
								}
							}
						}	
					}
				}	
			}
		}	
	}
	//-> Mensaje: Ditamen final.
	alert( mensaje );	
}
else {
	//-> Mensaje de error al usuario
	alert( 'No elegiste ninguna de las opciones\nPiedra: 0 \tLagarto: 3\nPapel: 1 \tSpock: 4\nTijera: 2' );
} 

//-> FINAL
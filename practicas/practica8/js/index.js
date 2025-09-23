    let nombre = 'Abraham';
    let apellido = 'Gonzalez';
    console.log(nombre);
    console.log(apellido);
    console.log(nombre + ' ' +apellido);
    let completo = nombre + ' ' + apellido;
    let nombreCompleto = document.getElementById('nombreCompleto');
    nombreCompleto.innerHTML = completo;

    const PI = 3.1416;
    //PI = 3.1; 

    /* Las constantes 
    no pueden cambiar 
    su valor */

    console.log(PI);

    let edad = 20;
    console.log(edad*2);
    console.log(edad/2);
    console.log(edad+2);
    console.log(edad-2);

    let edadAntoine = 17;

    if( edadAntoine >= 18) {
        console.log('Antoine Es mayor de edad');
    } else {
        console.log('Antoine Es menor de edad');
    }

    let diaSemana = 'Miercoles';

    switch(diaSemana) {
        case 'Lunes':
            console.log('Hoy es Lunes');
            break;
        case 'Martes':
            console.log('Hoy es Martes');
            break;
        case 'Miercoles':
            console.log('Hoy es Miercoles');
            break;
        case 'Jueves':
            console.log('Hoy es Jueves');
            break;
        case 'Viernes':
            console.log('Hoy es Viernes');
            break;
        default:
            console.log('Es fin de semana');
    }   

    let numero1 = 5;
    let numero2 = 10;

    let suma = numero1 + numero2;
    console.log('La suma es: ' + suma);
    function sumar(a, b) {
        return a + b;
    }
    console.log('La suma es: ' + sumar(8, 12));

    // Reto hacer una funcion que calcule el area de un circulo

    let radio = 5;
    function areaCirculo(r) {
        return PI * r * r;
    }
    console.log('El area del circulo es: ' + areaCirculo(radio));

    let valorRadio = document.getElementById('valorRadio');
    let resultado = document.getElementById('resultado');
    let formulario = document.getElementById('formulario');
    let botonCalcular = document.getElementById('botonCalcular');

    botonCalcular.onclick = function(event) {
        event.preventDefault();
        let r = parseFloat(valorRadio.value);
        let area = areaCirculo(r);
        resultado.value = area.toFixed(2);
    }








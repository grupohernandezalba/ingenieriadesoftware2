    let estado = document.getElementById('estado');
    estado.value = 11;

    let fecha = document.getElementById('fecha');

    fecha.value = obtenerFecha();


    function obtenerFecha(){
        let hoy = new Date();
        fechaCadena = hoy.getFullYear();
        fechaCadena += '-';
        console.log(hoy.getMonth());
        console.log( ('0' + (hoy.getMonth() + 1)));


        let str = "Hello World";
        let part = str.slice(0, 5); // Extracts "Hello"
        console.log(part); // Output: Hello

        //console.log( ('011').slice(-2));
        
        fechaCadena += ('0' + (hoy.getMonth() + 1)).slice(-2);
        fechaCadena += '-';
        console.log(hoy.getDate());
        fechaCadena += ('0' + hoy.getDate()).slice(-2);
        return fechaCadena;
    }

    let contrasena1 = document.getElementById('contrasena1');
    let contrasena2 = document.getElementById('contrasena2');
    let formulario =  document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
            console.log(contrasena1.value.length);
            if (contrasena1.value.length < 8 && contrasena2.value.length < 8) {
                alert('Las contraseñas debe ser de al menos 8 caracteres');
                event.preventDefault(); // Prevent form submission
            } else {
                console.log('entro');
                if(contrasena1.value !== contrasena2.value) {
                    alert('Las contraseñas deben ser iguales');
                    event.preventDefault();
                }
            }
    });


    /*
    Reto: Hacer un formulario que oculte y muestre la contraseña
    usar input group de bootstrap
    Tip: cambiar el type al input ya sea text o password

    No usar alert, utilizar https://getbootstrap.com/docs/5.3/components/alerts/#examples
    de BS
    */
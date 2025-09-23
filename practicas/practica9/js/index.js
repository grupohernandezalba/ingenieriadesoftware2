    let estado = document.getElementById("estado");
    estado.value = 11;

    let fecha = document.getElementById("fecha");
    const hoy = new Date();
    const fechaCadena = hoy.toISOString().split('T')[0];
    fecha.value = fechaCadena;













    /*
    Reto: Hacer un formulario que oculte y muestre la contraseña
    usar input group de bootstrap
    Tip: cambiar el type al input ya sea text o password

    No usar alert, utilizar https://getbootstrap.com/docs/5.3/components/alerts/#examples
    de BS
    */
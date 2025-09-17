    const persona = {
            nombre : 'Homero',
            apellido : 'Simpson',
            edad : 40
        };

    let datos = persona.nombre + ' ' + persona.apellido + ', edad: ' + persona.edad;
    console.log(datos);

    let nuevosDatos = `${persona.nombre} ${persona.apellido} , edad: ${persona.edad}`;
    console.log(nuevosDatos);

    //document.write(nuevosDatos);
    let paciente = document.getElementById('paciente');

    paciente.innerHTML = nuevosDatos;

    let masDatos = `
        <p><strong>Nombre:</strong> ${persona.nombre}</p>


        <p><strong>Apellido:</strong> ${persona.apellido}</p>

        <p><strong>Edad:</strong> ${persona.edad}</p>

        <p><strong>Estado de cuenta:</strong> $${ (500.768 + 200.5464).toFixed(2) } USD</p>
    `;

    paciente.innerHTML = masDatos;


    // al asignar variables dejar espacio
    // hablar sobre los nombramientos de Variable en JS 
    // https://www.aluracursos.com/blog/convenciones-de-nomenclatura-camel-pascal-kebab-snake-case

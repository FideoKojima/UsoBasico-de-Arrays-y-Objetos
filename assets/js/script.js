const radiologia = [
    { hora: '08:00', medico: 'Dr. Pérez', paciente: 'Juan Pérez', rut: '12.345.678-9', previsión: 'Fonasa' },
    { hora: '09:30', medico: 'Dr. López', paciente: 'Ana Gálvez', rut: '23.456.789-0', previsión: 'Isapre' }
];

const traumatologia = [
    { hora: '10:00', medico: 'Dra. Fernández', paciente: 'Carlos Ramírez', rut: '34.567.890-1', previsión: 'Fonasa' },
    { hora: '11:30', medico: 'Dr. Morales', paciente: 'Laura Martínez', rut: '45.678.901-2', previsión: 'Isapre' }
];

const dental = [
    { hora: '12:00', medico: 'Dra. González', paciente: 'Miguel Silva', rut: '56.789.012-3', previsión: 'Fonasa' },
    { hora: '13:30', medico: 'Dr. Ortega', paciente: 'Sofía Fernández', rut: '67.890.123-4', previsión: 'Isapre' }
];

function mostrarAtenciones(listado, nombreListado) {
    document.write('<h2>' + nombreListado + '</h2>');
    if (listado.length > 0) {
        const primeraAtencion = listado[0];
        const ultimaAtencion = listado[listado.length - 1];
        
        document.write('<p>Primera atención: ' + primeraAtencion.paciente + ' - ' + primeraAtencion.previsión + '</p>');
        document.write('<p>Última atención: ' + ultimaAtencion.paciente + ' - ' + ultimaAtencion.previsión + '</p>');
    }
}

function mostrarEnTabla(listado, nombreListado) {
    document.write('<h2>' + nombreListado + '</h2>');
    document.write('<table border="1"><tr><th>Hora</th><th>Médico</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>');

    listado.forEach(item => {
        document.write('<tr>');
        document.write('<td>' + item.hora + '</td>');
        document.write('<td>' + item.medico + '</td>');
        document.write('<td>' + item.paciente + '</td>');
        document.write('<td>' + item.rut + '</td>');
        document.write('<td>' + item.previsión + '</td>');
        document.write('</tr>');
    });

    document.write('</table>');
}

mostrarAtenciones(radiologia, 'Radiología');
mostrarAtenciones(traumatologia, 'Traumatología');
mostrarAtenciones(dental, 'Dental');

mostrarEnTabla(radiologia, 'Radiología');
mostrarEnTabla(traumatologia, 'Traumatología');
mostrarEnTabla(dental, 'Dental');

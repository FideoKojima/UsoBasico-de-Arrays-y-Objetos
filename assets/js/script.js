let radiologia = [
    { hora: "11:00", especialista: "Ignacio Schulz", paciente: "Francisca Rojas", rut: "9878782-1", prevision: "FONASA" },
    { hora: "11:30", especialista: "Federico Subercaseaux", paciente: "Pamela Estrada", rut: "15345241-3", prevision: "ISAPRE" },
    { hora: "15:00", especialista: "Fernando Wurthz", paciente: "Armando Luna", rut: "16445345-9", prevision: "ISAPRE" },
    { hora: "15:30", especialista: "Ana María Godoy", paciente: "Manuel Godoy", rut: "17666419-0", prevision: "FONASA" },
    { hora: "16:00", especialista: "Patricia Suazo", paciente: "Ramón Ulloa", rut: "14989389-K", prevision: "FONASA" }
];

let traumatologia = [
    { hora: "8:00", especialista: "María Paz Altuzarra", paciente: "Paula Sánchez", rut: "15554774-5", prevision: "FONASA" },
    { hora: "10:00", especialista: "Raúl Araya", paciente: "Angélica Navas", rut: "15444147-9", prevision: "ISAPRE" },
    { hora: "10:30", especialista: "María Arriagada", paciente: "Ana Klapp", rut: "17879423-9", prevision: "ISAPRE" },
    { hora: "11:00", especialista: "Alejandro Badilla", paciente: "Felipe Mardones", rut: "1547423-6", prevision: "ISAPRE" },
    { hora: "11:30", especialista: "Cecilia Budnik", paciente: "Diego Marre", rut: "16554741-K", prevision: "FONASA" },
    { hora: "12:00", especialista: "Arturo Cavagnaro", paciente: "Cecilia Méndez", rut: "9747535-8", prevision: "ISAPRE" },
    { hora: "12:30", especialista: "Andrés Kanacri", paciente: "Marcial Suazo", rut: "11254785-5", prevision: "ISAPRE" }
];

let dental = [
    { hora: "8:30", especialista: "Andrea Zúñiga", paciente: "Marcela Retamal", rut: "11123425-6", prevision: "ISAPRE" },
    { hora: "11:00", especialista: "María Pía Zañartu", paciente: "Angel Muñoz", rut: "9878789-2", prevision: "ISAPRE" },
    { hora: "11:30", especialista: "Scarlett Witting", paciente: "Mario Kast", rut: "7998789-5", prevision: "FONASA" },
    { hora: "13:00", especialista: "Francisco von Teuber", paciente: "Karin Fernández", rut: "18887662-K", prevision: "FONASA" },
    { hora: "13:30", especialista: "Eduardo Viñuela", paciente: "Hugo Sánchez", rut: "17665461-4", prevision: "FONASA" },
    { hora: "14:00", especialista: "Raquel Villaseca", paciente: "Ana Sepúlveda", rut: "14441281-0", prevision: "ISAPRE" }
];


document.querySelector("#radiologia-list tbody").innerHTML += `
    <tr>
        <td><b>Primera Atención</b></td>
        <td>${radiologia[0].paciente}</td>
        <td>${radiologia[0].prevision}</td>
    </tr>
    <tr>
        <td><b>Última Atención</b></td>
        <td>${radiologia[4].paciente}</td>
        <td>${radiologia[4].prevision}</td>
    </tr>
`;

for (let index = 0; index < radiologia.length; index++) {
    document.querySelector("#radiologia-list-full tbody").innerHTML += `
        <tr>
            <td>${radiologia[index].hora}</td>
            <td>${radiologia[index].especialista}</td>
            <td>${radiologia[index].paciente}</td>
            <td>${radiologia[index].rut}</td>
            <td>${radiologia[index].prevision}</td>
        </tr>
    `;
};


document.querySelector("#traumatologia-list tbody").innerHTML += `
    <tr>
        <td><b>Primera Atención</b></td>
        <td>${traumatologia[0].paciente}</td>
        <td>${traumatologia[0].prevision}</td>
    </tr>
    <tr>
        <td><b>Última Atención</b></td>
        <td>${traumatologia[6].paciente}</td>
        <td>${traumatologia[6].prevision}</td>
    </tr>
`;

for (let index = 0; index < traumatologia.length; index++) {
    document.querySelector("#traumatologia-list-full tbody").innerHTML += `
        <tr>
            <td>${traumatologia[index].hora}</td>
            <td>${traumatologia[index].especialista}</td>
            <td>${traumatologia[index].paciente}</td>
            <td>${traumatologia[index].rut}</td>
            <td>${traumatologia[index].prevision}</td>
        </tr>
    `;
};


document.querySelector("#dental-list tbody").innerHTML += `
    <tr>
        <td><b>Primera Atención</b></td>
        <td>${dental[0].paciente}</td>
        <td>${dental[0].prevision}</td>
    </tr>
    <tr>
        <td><b>Última Atención</b></td>
        <td>${dental[5].paciente}</td>
        <td>${dental[5].prevision}</td>
    </tr>
`;

for (let index = 0; index < dental.length; index++) {
    document.querySelector("#dental-list-full tbody").innerHTML += `
        <tr>
            <td>${dental[index].hora}</td>
            <td>${dental[index].especialista}</td>
            <td>${dental[index].paciente}</td>
            <td>${dental[index].rut}</td>
            <td>${dental[index].prevision}</td>
        </tr>
    `;
};
const cliente = {
    nome: "Lucas",
    idade: 24,
    email: "lucas@firma.com",
    telefone: ["42 555666777", "42 222333444"],
};

cliente.enderecos = [

    {
        rua: "R. Dr Orlando Araujo Costa",
        numero: 1931,
        apartamento: true,
        complemento: "ap 1931",
    },
];

cliente.enderecos.push({
    rua: "R. Arthur Melh",
    numero: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter((enderecos) => enderecos.apartamento === true);

console.log(listaApenasApartamentos);

console.log(cliente.enderecos);
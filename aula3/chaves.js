const cliente = {
    nome: "Lucas",
    idade: 16,
    email: "lucaschavaren@backend.com",
    telefone: ["42 40029822", "42 6767676767"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1931,
        apartamento: true,
        complemento: "ap 1931",
},
];

const chaveDoObjeto = Object.keys(cliente);
console.log(chaveDoObjeto);

if (!chaveDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário ter um endereço cadastrado");
}
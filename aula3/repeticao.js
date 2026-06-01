const cliente = {
    nome: "Lucas",
    idade: 24,
    email: "lucas@backend.com",
    telefone: ["42 40028922", "42 6767676767"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1931,
        apartamento: true,
        complemento: "ap 1931",
},
];

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}
const cliente = {
    nome: "Lucas C.", 
    idade: 95,
    CPF: "12345678",
    email: "lucas.chavaren.lima@escola.pr.gov.br",
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.CPF.substring(0, 3)}`);

const chaves = ["nome", "idade", "CPF", "email"];

chaves.forEach((chave) =>{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);

});
const clientes = require("./personagemMarvel.json");

function filtrarHeroisComApartamento(clientes){
    return clientes.filter((cliente) => {
        return(
            cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const heroisFiltrados = filtrarHeroisComApartamento(clientes);

console.log
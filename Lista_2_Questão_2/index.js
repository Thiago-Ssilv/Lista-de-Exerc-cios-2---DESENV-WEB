function ordenarPorIdade(pessoas) {
    
    return pessoas.sort((a, b) => a.idade - b.idade);
}


let pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 20 },
    { nome: "Ana", idade: 30 },
    { nome: "Carlos", idade: 22 }
];

console.log(ordenarPorIdade(pessoas));


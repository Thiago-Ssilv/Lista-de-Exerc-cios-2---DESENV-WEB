function substituirElemento(array, valorAntigo, valorNovo) {
    
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] === valorAntigo) {
            array[i] = valorNovo;
        }
    }
    return array;
}


let numeros = [1, 2, 3, 2, 4, 2];
console.log(substituirElemento(numeros, 2, 5)); 

function separarParesImpares(numeros) {
    
    let pares = [];
    let impares = [];

    
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];

        
        if (numero % 2 === 0) {
            pares.push(numero);
        } else {
            
            impares.push(numero);
        }
    }

    
    return { pares, impares };
}


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(separarParesImpares(numeros));

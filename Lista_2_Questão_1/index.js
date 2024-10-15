function contarOcorrencias(array) {
    
    let frequencia = {};

    
    for (let i = 0; i < array.length; i++) {
        let numero = array[i];

    
        if (frequencia[numero]) {
            frequencia[numero]++;
        } else {
        
            frequencia[numero] = 1;
        }
    }

    return frequencia;
}


let numeros = [1, 2, 2, 3, 3, 3, 4];
console.log(contarOcorrencias(numeros));


function multiplicarMatrizes(matrizA, matrizB) {
    
    if (matrizA[0].length !== matrizB.length) {
        throw new Error("Número de colunas da primeira matriz deve ser igual ao número de linhas da segunda.");
    }

    
    let resultado = [];
    for (let i = 0; i < matrizA.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matrizB[0].length; j++) {
            resultado[i][j] = 0;
        }
    }

    
    for (let i = 0; i < matrizA.length; i++) {
        for (let j = 0; j < matrizB[0].length; j++) {
            for (let k = 0; k < matrizA[0].length; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return resultado;
}

let matrizA = [
    [1, 2],
    [3, 4],
    [5, 6]
];

let matrizB = [
    [7, 8, 9],
    [10, 11, 12]
];

console.log(multiplicarMatrizes(matrizA, matrizB));


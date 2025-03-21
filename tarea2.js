function numeroAleatorio (min, max){
    const aleatorio = Math.random();
    const resultado = Math.ceil(aleatorio * (max - min + 1)) + min;
    return resultado;
}

const resultado = numeroAleatorio(1, 8);
console.log(resultado);
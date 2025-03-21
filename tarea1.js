function palabraMasLarga(cadena){

    const palabras = cadena.trim().split(/\s+/);
let palabraLarga = "";
for(let i = 0; i < palabras.length; i++){
    if (palabras[i].length > palabraLarga.length){
        palabraLarga = palabras[i];
    }

}
return palabraLarga;
}

const resultado = palabraMasLarga("La programación es muy interesante");
console.log(resultado);
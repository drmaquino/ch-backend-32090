function crearId() {
    const letras = 'abcdefghijklmonpqrstuvwxyz';
    const letrasAlAzar = [];
    for (let i = 0; i < 5; i++) {
        const indiceLetra = Math.floor(Math.random() * letras.length);
        letrasAlAzar.push(letras[indiceLetra]);
    }
    const id = `${Date.now()}-${letrasAlAzar.join('')}`;

    return id;
}

module.exports = {
    crearId
}

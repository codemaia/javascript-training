
    const getPokemons = url => new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {

        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            resolve(data.name);
        }

        if (request.readyState === 4) {
            reject('Não foi possível obter os dados da API');
        }
    });

    request.open('GET', url);
    request.send();

});


getPokemons('https://pokeapi.co/api/v2/pokemon/25')
    .then(pikachu => {
        console.log(pikachu);
        return getPokemons('https://pokeapi.co/api/v2/pokemon/1');
    })
    .then(bulbasaur => {
        console.log(bulbasaur);
        return getPokemons('https://pokeapi.co/api/v2/pokemon/4');
    })
    .then(charmander => {
        console.log(charmander);
    })
    .catch(error => {
        console.log(error);
    });





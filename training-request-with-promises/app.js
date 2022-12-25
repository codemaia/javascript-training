
const getPokemons = url => new Promise((resolve, reject) => {
    
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
    
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            resolve(data);
            return
        }
    
        if (request.readyState === 4) {
            reject('Não foi possivel obter os dados da API');
        }
    
    });
    
    
    request.open('GET', url);
    request.send();

});


getPokemons('https://pokeapi.co/api/v2/pokemon/1')
    .then(pokemon => {
        console.log(pokemon);
    })
    .catch(error => {
        console.log(error);
    })






// getPokemons('https://pokeapi.co/api/v2/pokemon/1', (error, data) => {
//     if (error) {
//         console.log(error);
//         return;
//     }

//     console.log(data);
// });




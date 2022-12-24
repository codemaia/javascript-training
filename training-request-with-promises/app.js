


const getPokemons = callback => {

    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
    
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(null, data);
            return
        }
    
    
        if (request.readyState === 4) {
            callback('Não foi possivel obter os dados da API', null)
        }
    
    });
    
    
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon/1');
    request.send();

}


getPokemons((error, data) => {
    if (error) {
        console.log(error)
        return
    }

    console.log(data);
})




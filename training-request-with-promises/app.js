const request = new XMLHttpRequest();



request.addEventListener('readystatechange', () => {

    if (request.readyState === 4 & request.status === 200) {
        console.log(request.responseText);
    }


    if (request.readyState === 4) {
        console.log('Não foi possivel obter os dados da API')
    }


});



request.open('GET', 'https://pokeapi.co/api/v2/pokemon/1');
request.send();
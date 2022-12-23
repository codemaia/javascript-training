const request = new XMLHttpRequest();



request.addEventListener('readystatechange', () => {

    console.log(request.responseText);


});



request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();
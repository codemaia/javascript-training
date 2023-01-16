/**
 *  1 - Location API -> Text Search -> City Search
 *  2 - Current conditions API -> Current conditions
 * 
 */

const APIKey = "PDRqfNvcKdWPXCjHI1Mt31LoTCnRWnof";

const getCity = async () => {

    try {
        const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=belém`);
        
        if (!response.ok) {
            throw new Error('Não foi possível obter os dados da API');
        }

        const [cityData] = await response.json();
    
        return cityData;

    } catch ({ name, message }) {
        console.log(`${name}: ${message}`);
    }

}


// getCity();


const getCityWeather = async () => {

    try {
        const { Key } = await getCity();
        const cityWeatherUrl = (`http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}`);     
        const response = await fetch(cityWeatherUrl);

        return console.log(response.json());

    } catch ({ name, message }) {
        console.log(`${name}: error${message}`);
    }

}



getCityWeather();
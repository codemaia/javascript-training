/**
 *  1 - Location API -> Text Search -> City Search
 *  2 - Current conditions API -> Current conditions
 * 
 */

const APIKey = "PDRqfNvcKdWPXCjHI1Mt31LoTCnRWnof";

const getCity = async cityName => {

    try {
        const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`);
        
        if (!response.ok) {
            throw new Error('Não foi possível obter os dados da API');
        }

        const [cityData] = await response.json();
    
        return cityData;

    } catch ({ name, message }) {
        console.log(`${name}: ${message}`);
    }

}


const getCityWeather = async cityName => {

    try {
        const { Key } = await getCity(cityName);
        const cityWeatherUrl = (`http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}`);
        const response = await fetch(cityWeatherUrl);

        if (!response.ok) {
            throw new Error('Não foi possível obter os dados da API');
        }

        const [cityWeatherData] = await response.json();
        return cityWeatherData;

    } catch ({ name, message }) {
        console.log(`${name}: error${message}`);
    }

}

// console.log(getCityWeather());
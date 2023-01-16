/**
 *  1 - Location API -> Text Search -> City Search
 *  2 - Current conditions API -> Current conditions
 * 
 */

const APIKey = "PDRqfNvcKdWPXCjHI1Mt31LoTCnRWnof";

const getCity = async () => {

    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=belém`);

    const [cityData] = await response.json();
     return console.log(cityData);

}


getCity();
const formCity = document.querySelector('[data-js="change-location"]');
const cityName = document.querySelector('[data-js="city-name"]');
const cityWeather = document.querySelector('[data-js="city-weather"]');
const cityTemperature = document.querySelector('[data-js="city-temperature"]');

formCity.addEventListener('submit', async event => {
    event.preventDefault();
    
    const inputValue = event.target.city.value;

    const { LocalizedName } = await getCity(inputValue);
    const { WeatherIcon, WeatherText, Temperature, isDayTime } = await getCityWeather(LocalizedName);

    console.log(WeatherIcon, WeatherText, Temperature, isDayTime);
    
    cityName.textContent = inputValue;
    cityWeather.textContent = WeatherText;
    cityTemperature.textContent = Temperature.Metric.Value;


    formCity.reset();
});